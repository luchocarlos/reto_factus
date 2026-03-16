"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.procesarFactura = void 0;
// ── 1. Obtener token OAuth ──────────────────────────────────────────────────
async function getAccessToken() {
    var _a;
    const body = new URLSearchParams({
        grant_type: 'password', // autenticación
        client_id: process.env.FACTUS_CLIENT_ID,
        client_secret: process.env.FACTUS_CLIENT_SECRET,
        username: process.env.FACTUS_USERNAME,
        password: process.env.FACTUS_PASSWORD,
    });
    const res = await fetch(`${process.env.FACTUS_URL}/oauth/token`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
    });
    if (!res.ok) {
        const err = await res.text();
        throw new Error(`Auth Factus falló (${res.status}): ${err}`);
    }
    const data = await res.json();
    console.log('TOKEN OK:', ((_a = data.access_token) === null || _a === void 0 ? void 0 : _a.slice(0, 20)) + '...');
    return data.access_token;
}
// ── 2. Obtener rango de numeración ────────────────────────────────────────── // consulta de rango de facturacion
async function getNumberingRangeId(token) {
    var _a, _b;
    const res = await fetch(`${process.env.FACTUS_URL}/v1/numbering-ranges`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
        },
    });
    if (!res.ok)
        throw new Error(`Rangos falló (${res.status})`);
    const data = await res.json(); //busqueda del doble anidada
    const rangos = (_a = data.data) === null || _a === void 0 ? void 0 : _a.data;
    if (!rangos || rangos.length === 0) {
        throw new Error('No hay rangos de numeración disponibles');
    }
    const facturaVenta = //busqueda de rango del obj respuesta de factus
     (_b = rangos.find((r) => r.id === 8)) !== null && _b !== void 0 ? _b : rangos.find((r) => typeof r.document === 'string' &&
        r.document.toLowerCase().includes('factura de venta'));
    if (!facturaVenta) {
        throw new Error('No hay rango de Factura de Venta activo');
    }
    return facturaVenta.id; // retorno de rango
}
// ── 3. Crear y validar factura ──────────────────────────────────────────────
async function crearFactura(token, orden, numberingRangeId) {
    var _a, _b, _c;
    const payload = {
        document: "01", // tipo documento - 1 factura electrónica                              
        numbering_range_id: numberingRangeId, //tango de numeracion
        reference_code: `REF-${Date.now()}`, //codigo unico
        observation: "Venta tienda online",
        payment_method_code: "10", // me todo de pago - 10 efectivo
        customer: {
            identification: orden.customer.identification,
            dv: null,
            company: "",
            trade_name: "",
            names: orden.customer.name,
            address: orden.customer.address,
            email: orden.customer.email,
            phone: orden.customer.phone,
            identification_document_id: 3, // tipo de documento - 3 cedula
            legal_organization_id: "2", // tipo de legal - 2 persona Natural 
            tribute_id: "21", // id tributario - iva - 21 no aplica
            municipality_id: "169" // mincipios - 169 Bogotá
        },
        items: orden.item.map((it) => ({
            code_reference: it.code, // id del producto o servicio - personalizado
            name: "Cuadro decorativo",
            quantity: it.quantity, // can tidad
            discount_rate: 0, // descuento
            price: 50000, //precio 
            tax_rate: "19.00", // iva
            unit_measure_id: 70, // unidad de medida - 70 cantidad
            standard_code_id: 1, // Estándar de adopción del contribuyente
            is_excluded: 0, //excluye iva - 0 no
            tribute_id: 1, // impuestos - 1 iva sobre la venta
            withholding_taxes: [] // informacion de retencion a la fuente del vendedor
        }))
    };
    console.log('PAYLOAD:', JSON.stringify(payload, null, 2)); // factura tipo json para la api
    const res = await fetch(`${process.env.FACTUS_URL}/v1/bills/validate`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
    });
    if (!res.ok) {
        const err = await res.text();
        throw new Error(`Crear factura falló (${res.status}): ${err}`);
    }
    const data = await res.json();
    console.log('FACTURA CREADA:', JSON.stringify((_a = data.data) === null || _a === void 0 ? void 0 : _a.bill));
    const billNumber = (_c = (_b = data.data) === null || _b === void 0 ? void 0 : _b.bill) === null || _c === void 0 ? void 0 : _c.number;
    if (!billNumber)
        throw new Error('No se recibió número de factura');
    return billNumber; // retorno del dato para descagar factura
}
// ── 4. Descargar PDF ────────────────────────────────────────────────────────
async function descargarPDF(token, billNumber) {
    var _a;
    const res = await fetch(`${process.env.FACTUS_URL}/v1/bills/download-pdf/${billNumber}`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
        },
    });
    if (!res.ok) {
        const err = await res.text();
        throw new Error(`Descarga PDF falló (${res.status}): ${err}`);
    }
    const data = await res.json();
    const base64 = (_a = data.data) === null || _a === void 0 ? void 0 : _a.pdf_base_64_encoded;
    if (!base64)
        throw new Error('Factus no retornó PDF en base64');
    console.log('PDF OK, tamaño base64:', base64.length);
    return Buffer.from(base64, 'base64');
}
// ── Export principal ────────────────────────────────────────────────────────
const procesarFactura = async (orden) => {
    const token = await getAccessToken();
    const numberingRangeId = await getNumberingRangeId(token);
    const billNumber = await crearFactura(token, orden, numberingRangeId);
    const pdfData = await descargarPDF(token, billNumber);
    return {
        fileName: `factura_${billNumber}.pdf`, // descagar directa
        pdfData
    };
};
exports.procesarFactura = procesarFactura;
