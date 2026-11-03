"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.procesarNotaCredito = exports.procesarFactura = exports.construirPayloadNotaCredito = exports.construirPayloadFacturaV1 = exports.construirPayloadFactura = exports.seleccionarRangoNumeracion = exports.calcularTotales = exports.evaluarEstadoDian = exports.FactusApiError = void 0;
// mapeo para v2
const DOCUMENT_CODES_V2 = {
    cc: "13", // cedula de ciudadania
    nit: "31", // NIT
};
const PAYMENT_METHOD_CODES_V2 = {
    efectivo: "10", // efectivo
    tarjeta: "48", // tarjeta de credito
};
const IVA_RATE = 19;
const UNIT_MEASURE_CODE = "94"; // unidad (comun en v2)
const STANDARD_CODE = "999"; // estandar de adopcion del contribuyente
const MUNICIPALITY_CODE = "11001"; // Bogota D.C. (codigo correcto segun DIVIPOLA)
const DEFAULT_TRIBUTE_CODE = "ZZ"; // no aplica
const DEFAULT_LEGAL_ORG_NATURAL = "2"; // persona natural
const DEFAULT_LEGAL_ORG_JURIDICA = "1"; // persona juridica
function debugLog(...args) {
    if (process.env.FACTUS_DEBUG === 'true') {
        console.log('[factus]', ...args);
    }
}
const round2 = (value) => Math.round((value + Number.EPSILON) * 100) / 100;
const money = (value) => round2(value).toFixed(2);
function nuevoReferenceCode(prefijo) {
    const aleatorio = Math.random().toString(36).slice(2, 8);
    return `${prefijo}-${Date.now()}-${aleatorio}`;
}
class FactusApiError extends Error {
    constructor(message, status = 502, details) {
        super(message);
        this.name = 'FactusApiError';
        this.status = status;
        this.details = details;
    }
}
exports.FactusApiError = FactusApiError;
// Convierte la respuesta de error de Factus en un error con el status HTTP
// original (400, 409, 422, etc.) para que el frontend pueda mostrar el motivo.
async function leerErrorFactus(res, contexto) {
    var _a, _b, _c;
    const raw = await res.text();
    let mensaje = raw;
    let details = raw;
    try {
        const json = JSON.parse(raw);
        details = json;
        const candidato = (_c = (_b = (_a = json.message) !== null && _a !== void 0 ? _a : json.error) !== null && _b !== void 0 ? _b : json.errors) !== null && _c !== void 0 ? _c : raw;
        mensaje = typeof candidato === 'string' ? candidato : JSON.stringify(candidato);
    }
    catch {
        // La respuesta no era JSON; dejamos el texto plano.
    }
    const status = res.status >= 400 && res.status < 500 ? res.status : 502;
    return new FactusApiError(`${contexto} (${res.status}): ${mensaje || res.statusText}`, status, details);
}
function extraerNumeroDocumento(data) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    return (_o = (_m = (_k = (_h = (_e = (_b = (_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.number) !== null && _b !== void 0 ? _b : (_d = (_c = data === null || data === void 0 ? void 0 : data.data) === null || _c === void 0 ? void 0 : _c.bill) === null || _d === void 0 ? void 0 : _d.number) !== null && _e !== void 0 ? _e : (_g = (_f = data === null || data === void 0 ? void 0 : data.data) === null || _f === void 0 ? void 0 : _f.credit_note) === null || _g === void 0 ? void 0 : _g.number) !== null && _h !== void 0 ? _h : (_j = data === null || data === void 0 ? void 0 : data.data) === null || _j === void 0 ? void 0 : _j.credit_note_number) !== null && _k !== void 0 ? _k : (_l = data === null || data === void 0 ? void 0 : data.data) === null || _l === void 0 ? void 0 : _l.bill_number) !== null && _m !== void 0 ? _m : data === null || data === void 0 ? void 0 : data.number) !== null && _o !== void 0 ? _o : data === null || data === void 0 ? void 0 : data.bill_number;
}
// Reúne los mensajes de las reglas DIAN que Factus reporta en la respuesta.
// Pueden venir como arreglo de strings, arreglo de objetos con `message` o
// diccionario campo -> errores (formato de validación 422).
function coleccionarReglasDian(data) {
    var _a, _b, _c, _d, _e, _f, _g;
    const reglas = [];
    const agregar = (valor) => {
        var _a, _b;
        if (valor === undefined || valor === null)
            return;
        if (Array.isArray(valor)) {
            valor.forEach(agregar);
            return;
        }
        if (typeof valor === 'object') {
            const item = valor;
            agregar((_b = (_a = item.message) !== null && _a !== void 0 ? _a : item.errors) !== null && _b !== void 0 ? _b : null);
            return;
        }
        reglas.push(String(valor));
    };
    const registro = (_e = (_c = (_b = (_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.credit_note) !== null && _b !== void 0 ? _b : data === null || data === void 0 ? void 0 : data.credit_note) !== null && _c !== void 0 ? _c : (_d = data === null || data === void 0 ? void 0 : data.data) === null || _d === void 0 ? void 0 : _d.bill) !== null && _e !== void 0 ? _e : data === null || data === void 0 ? void 0 : data.bill;
    agregar((_f = registro === null || registro === void 0 ? void 0 : registro.errors) !== null && _f !== void 0 ? _f : null);
    if (reglas.length === 0)
        agregar((_g = data === null || data === void 0 ? void 0 : data.errors) !== null && _g !== void 0 ? _g : null);
    return reglas;
}
// Clasifica la respuesta según "Manejo de respuestas API FACTUS" (Versión 2):
// - Validada: is_validated true.
// - Rechazada (novedad DIAN 405): sin validar y en `errors` viene "Rechazo".
// - Cualquier otro caso sin validar queda como pendiente (ej. la DIAN no
//   respondió a tiempo), que NO se debe eliminar.
function evaluarEstadoDian(data) {
    var _a, _b, _c, _d, _e;
    const registro = (_e = (_c = (_b = (_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.credit_note) !== null && _b !== void 0 ? _b : data === null || data === void 0 ? void 0 : data.credit_note) !== null && _c !== void 0 ? _c : (_d = data === null || data === void 0 ? void 0 : data.data) === null || _d === void 0 ? void 0 : _d.bill) !== null && _e !== void 0 ? _e : data === null || data === void 0 ? void 0 : data.bill;
    const validada = registro
        ? registro.is_validated === true
            || registro.status === 1
            || (typeof registro.validated_at === 'string' && registro.validated_at.length > 0)
        : normalizarTexto(data === null || data === void 0 ? void 0 : data.message).includes('validada con exito');
    const reglas = coleccionarReglasDian(data);
    const rechazada = !validada && reglas.some((regla) => normalizarTexto(regla).includes('rechaz'));
    return { validada, rechazada, reglas };
}
exports.evaluarEstadoDian = evaluarEstadoDian;
function calcularTotales(items, ivaRate = IVA_RATE) {
    var _a;
    let subtotal = 0;
    let total = 0;
    for (const item of items) {
        const cantidad = Number(item.quantity) || 0;
        const precio = Number(item.price) || 0;
        const descuento = Number((_a = item.discount_rate) !== null && _a !== void 0 ? _a : 0) || 0;
        const totalItem = round2(precio * cantidad * (1 - descuento / 100));
        const tasa = item.taxes && item.taxes.length > 0
            ? item.taxes.reduce((sum, tax) => sum + (Number(tax.rate) || 0), 0)
            : ivaRate;
        const base = round2(totalItem / (1 + tasa / 100));
        subtotal += base;
        total += totalItem;
    }
    subtotal = round2(subtotal);
    total = round2(total);
    return { subtotal, impuestos: round2(total - subtotal), total };
}
exports.calcularTotales = calcularTotales;
function normalizarTexto(value) {
    return String(value !== null && value !== void 0 ? value : '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim();
}
function seleccionarRangoNumeracion(rangos, tipo) {
    var _a, _b;
    const documentos = rangos.map((rango) => {
        var _a, _b, _c;
        return ({
            rango,
            texto: normalizarTexto((_c = (_b = (_a = rango === null || rango === void 0 ? void 0 : rango.document) !== null && _a !== void 0 ? _a : rango === null || rango === void 0 ? void 0 : rango.document_type) !== null && _b !== void 0 ? _b : rango === null || rango === void 0 ? void 0 : rango.name) !== null && _c !== void 0 ? _c : rango === null || rango === void 0 ? void 0 : rango.description),
        });
    });
    if (tipo === 'factura') {
        return (_a = documentos.find(({ texto }) => texto.includes('factura'))) === null || _a === void 0 ? void 0 : _a.rango;
    }
    return (_b = documentos.find(({ texto }) => texto.includes('nota') && texto.includes('credito'))) === null || _b === void 0 ? void 0 : _b.rango;
}
exports.seleccionarRangoNumeracion = seleccionarRangoNumeracion;
function fechaVencimiento(dias) {
    const fecha = new Date();
    fecha.setUTCDate(fecha.getUTCDate() + dias);
    return fecha.toISOString().slice(0, 10);
}
function construirCliente(customer) {
    const documentType = (customer.documentType || 'cc').toLowerCase();
    const isNit = documentType === 'nit';
    const identificationDocumentCode = customer.identification_document_code || DOCUMENT_CODES_V2[documentType] || DOCUMENT_CODES_V2.cc;
    const cliente = {
        identification_document_code: identificationDocumentCode,
        identification: customer.identification,
        legal_organization_code: customer.legal_organization_code ||
            (isNit ? DEFAULT_LEGAL_ORG_JURIDICA : DEFAULT_LEGAL_ORG_NATURAL),
        tribute_code: customer.tribute_code || DEFAULT_TRIBUTE_CODE,
        municipality_code: customer.municipality_code || MUNICIPALITY_CODE,
        country_code: customer.country_code || "CO",
    };
    if (customer.address)
        cliente.address = customer.address;
    if (customer.email)
        cliente.email = customer.email;
    if (customer.phone)
        cliente.phone = customer.phone;
    if (customer.responsibilities && Array.isArray(customer.responsibilities)) {
        cliente.responsibilities = customer.responsibilities;
    }
    else {
        cliente.responsibilities = ["R-99-PN"];
    }
    if (isNit) {
        cliente.company = customer.company || customer.name || '';
        if (customer.trade_name)
            cliente.trade_name = customer.trade_name;
        if (customer.dv)
            cliente.dv = customer.dv;
    }
    else {
        cliente.names = customer.names || customer.name || '';
    }
    return cliente;
}
function construirItems(items) {
    return items.map((item) => {
        var _a;
        const precio = Number(item.price) || 0;
        const descuento = Number((_a = item.discount_rate) !== null && _a !== void 0 ? _a : 0) || 0;
        const tasa = item.taxes && item.taxes.length > 0
            ? item.taxes.reduce((sum, tax) => sum + (Number(tax.rate) || 0), 0)
            : IVA_RATE;
        const precioNeto = round2(precio / (1 + tasa / 100));
        return {
            code_reference: item.code || item.code_reference,
            name: item.name,
            quantity: money(Number(item.quantity) || 0),
            discount_rate: money(descuento),
            price: money(precioNeto),
            unit_measure_code: item.unit_measure_code || UNIT_MEASURE_CODE,
            standard_code: item.standard_code || STANDARD_CODE,
            taxes: item.taxes && item.taxes.length > 0
                ? item.taxes.map((tax) => ({ code: tax.code, rate: money(Number(tax.rate) || 0) }))
                : [{ code: "01", rate: money(IVA_RATE) }],
        };
    });
}
function construirPayloadFactura(orden, numberingRangeId) {
    const documentType = (orden.customer.documentType || 'cc').toLowerCase();
    const paymentMethodCode = PAYMENT_METHOD_CODES_V2[orden.paymentMethod] || PAYMENT_METHOD_CODES_V2.efectivo;
    const paymentForm = orden.paymentForm || "1"; // 1 contado por defecto
    const totales = calcularTotales(orden.item);
    const detallePago = {
        payment_form: paymentForm,
        payment_method_code: paymentMethodCode,
        amount: money(totales.total),
    };
    if (paymentForm === '2') {
        detallePago.due_date = fechaVencimiento(30);
    }
    const payload = {
        reference_code: orden.reference_code || nuevoReferenceCode('REF'),
        document: orden.document || "01",
        operation_type: orden.operation_type || "10",
        observation: orden.observation || "Venta tienda online",
        payment_details: [detallePago],
        customer: construirCliente(orden.customer),
        items: construirItems(orden.item),
    };
    if (numberingRangeId) {
        payload.numbering_range_id = numberingRangeId;
    }
    return payload;
}
exports.construirPayloadFactura = construirPayloadFactura;
function construirPayloadFacturaV1(orden, numberingRangeId) {
    const documentType = (orden.customer.documentType || 'cc').toLowerCase();
    const isNit = documentType === 'nit';
    const paymentMethodCode = PAYMENT_METHOD_CODES_V2[orden.paymentMethod] || PAYMENT_METHOD_CODES_V2.efectivo;
    const payload = {
        document: "01",
        numbering_range_id: numberingRangeId,
        reference_code: orden.reference_code || nuevoReferenceCode('REF'),
        operation_type: "10",
        observation: orden.observation || "Venta tienda online",
        payment_form: orden.paymentForm || "1",
        payment_method_code: paymentMethodCode,
        customer: {
            identification_document_id: isNit ? 6 : 3,
            identification: orden.customer.identification,
            legal_organization_id: isNit ? 1 : 2,
            tribute_id: 21,
            municipality_id: 169,
            address: orden.customer.address,
            email: orden.customer.email,
            phone: orden.customer.phone,
        },
        items: orden.item.map((it) => {
            var _a;
            const descuento = Number((_a = it.discount_rate) !== null && _a !== void 0 ? _a : 0) || 0;
            const tasa = it.taxes && it.taxes.length > 0
                ? it.taxes.reduce((sum, tax) => sum + (Number(tax.rate) || 0), 0)
                : IVA_RATE;
            return {
                code_reference: it.code || it.code_reference,
                name: it.name,
                quantity: Number(it.quantity),
                discount_rate: descuento,
                price: Number(it.price) || 0,
                tax_rate: money(tasa),
                unit_measure_id: 70,
                standard_code_id: 1,
                is_excluded: 0,
                tribute_id: 1,
                withholding_taxes: [],
            };
        }),
    };
    if (isNit) {
        payload.customer.company = orden.customer.company || orden.customer.name;
        if (orden.customer.dv)
            payload.customer.dv = orden.customer.dv;
    }
    else {
        payload.customer.names = orden.customer.names || orden.customer.name;
    }
    return payload;
}
exports.construirPayloadFacturaV1 = construirPayloadFacturaV1;
function construirPayloadNotaCredito(nota, numberingRangeId) {
    const totales = calcularTotales(nota.items);
    const paymentDetails = (nota.payment_details && nota.payment_details.length > 0
        ? nota.payment_details
        : [
            {
                payment_form: "1",
                payment_method_code: "10",
                amount: money(totales.total),
            },
        ]).map((pago) => {
        const detalle = {
            payment_form: String(pago.payment_form),
            payment_method_code: String(pago.payment_method_code),
            amount: typeof pago.amount === 'string'
                ? pago.amount
                : money(Number(pago.amount) || totales.total),
        };
        if (pago.reference_code)
            detalle.reference_code = String(pago.reference_code);
        if (pago.due_date)
            detalle.due_date = String(pago.due_date);
        return detalle;
    });
    const payload = {
        reference_code: nota.reference_code || nuevoReferenceCode('NC'),
        correction_concept_code: String(nota.correction_concept_code),
        customization_id: String(nota.customization_id || "20"),
        observation: nota.observation || "Nota crédito",
        payment_details: paymentDetails,
        customer: construirCliente(nota.customer),
        items: construirItems(nota.items),
    };
    if (nota.bill_number)
        payload.bill_number = String(nota.bill_number);
    if (numberingRangeId)
        payload.numbering_range_id = numberingRangeId;
    return payload;
}
exports.construirPayloadNotaCredito = construirPayloadNotaCredito;
// ── 1. Obtener token OAuth ──────────────────────────────────────────────────
async function getAccessToken() {
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
        const error = await leerErrorFactus(res, 'Auth Factus falló');
        throw new FactusApiError(error.message, 502, error.details);
    }
    const data = await res.json();
    debugLog('token obtenido');
    return data.access_token;
}
// ── 2. Obtener rango de numeración ──────────────────────────────────────────
async function getRangosNumeracion(token) {
    var _a, _b, _c;
    const res = await fetch(`${process.env.FACTUS_URL}/v1/numbering-ranges`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
        },
    });
    if (!res.ok) {
        const error = await leerErrorFactus(res, 'Rangos de numeración falló');
        throw new FactusApiError(error.message, 502, error.details);
    }
    const data = await res.json();
    const rangos = (_c = (_b = (_a = data.data) === null || _a === void 0 ? void 0 : _a.data) !== null && _b !== void 0 ? _b : data.data) !== null && _c !== void 0 ? _c : [];
    return Array.isArray(rangos) ? rangos : [];
}
async function getNumberingRangeId(token, tipo) {
    const rangos = await getRangosNumeracion(token);
    const elegido = seleccionarRangoNumeracion(rangos, tipo);
    if (elegido === null || elegido === void 0 ? void 0 : elegido.id) {
        debugLog(`rango ${tipo} seleccionado:`, elegido.id, elegido.document);
        return elegido.id;
    }
    const disponibles = rangos
        .map((rango) => { var _a, _b; return (_b = (_a = rango === null || rango === void 0 ? void 0 : rango.document) !== null && _a !== void 0 ? _a : rango === null || rango === void 0 ? void 0 : rango.document_type) !== null && _b !== void 0 ? _b : rango === null || rango === void 0 ? void 0 : rango.name; })
        .filter(Boolean)
        .join(', ');
    throw new Error(`No hay rango de numeración activo para ${tipo}` +
        (disponibles ? `. Disponibles: ${disponibles}` : ''));
}
// ── 3. Crear y validar factura ──────────────────────────────────────────────
async function crearFactura(token, orden, numberingRangeId) {
    const payload = construirPayloadFactura(orden, numberingRangeId);
    debugLog('payload factura v2', JSON.stringify(payload));
    let res = await fetch(`${process.env.FACTUS_URL}/v2/bills/validate`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
    });
    if (!res.ok) {
        const v2Error = await leerErrorFactus(res, 'Crear factura v2 falló');
        debugLog('v2 falló, intentando v1:', v2Error.message);
        res = await fetch(`${process.env.FACTUS_URL}/v1/bills/validate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
            body: JSON.stringify(construirPayloadFacturaV1(orden, numberingRangeId)),
        });
        if (!res.ok) {
            const v1Error = await leerErrorFactus(res, 'Crear factura v1 falló');
            throw new FactusApiError(`${v1Error.message}. Detalle v2: ${v2Error.message}`, v1Error.status, v1Error.details);
        }
    }
    const data = await res.json();
    const billNumber = extraerNumeroDocumento(data);
    debugLog('factura creada', billNumber);
    if (!billNumber)
        throw new FactusApiError('No se recibió número de factura', 502, data);
    return billNumber;
}
// ── 4. Descargar PDF ────────────────────────────────────────────────────────
async function descargarPDF(token, billNumber) {
    var _a, _b;
    // Intentar v2 primero
    let res = await fetch(`${process.env.FACTUS_URL}/v2/bills/${billNumber}/download-pdf`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
        },
    });
    if (!res.ok) {
        res = await fetch(`${process.env.FACTUS_URL}/v1/bills/download-pdf/${billNumber}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
        });
    }
    if (!res.ok) {
        throw await leerErrorFactus(res, 'Descarga PDF falló');
    }
    const data = await res.json();
    const base64 = ((_a = data.data) === null || _a === void 0 ? void 0 : _a.pdf_base_64_encoded) || ((_b = data.data) === null || _b === void 0 ? void 0 : _b.pdf_base64);
    if (!base64)
        throw new FactusApiError('Factus no retornó PDF en base64', 502, data);
    debugLog('PDF descargado');
    return Buffer.from(base64, 'base64');
}
async function enviarNotaCredito(token, payload) {
    return fetch(`${process.env.FACTUS_URL}/v2/credit-notes/validate`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
    });
}
async function eliminarNotaCreditoNoValidada(token, referenceCode) {
    const res = await fetch(`${process.env.FACTUS_URL}/v2/credit-notes/reference/${encodeURIComponent(referenceCode)}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
        },
    });
    if (!res.ok) {
        const error = await leerErrorFactus(res, 'Eliminar nota crédito no validada falló');
        debugLog(error.message);
    }
}
// Reenvía la nota con el mismo payload. Factus es idempotente por
// reference_code, así que reintentar no genera duplicados. Si responde 409 hay
// un documento represado de envíos anteriores con ese NIT/rango: se elimina y
// se vuelve a intentar.
async function reenviarNotaCredito(token, payload) {
    let res = await enviarNotaCredito(token, payload);
    if (res.status === 409) {
        const conflicto = await leerErrorFactus(res, 'Nota crédito en conflicto al reenviar');
        debugLog(conflicto.message);
        await eliminarNotaCreditoNoValidada(token, payload.reference_code);
        res = await enviarNotaCredito(token, payload);
    }
    if (!res.ok) {
        throw await leerErrorFactus(res, 'Reenvío nota crédito falló');
    }
    return res.json();
}
async function crearNotaCredito(token, nota, numberingRangeId) {
    const payload = construirPayloadNotaCredito(nota, numberingRangeId);
    debugLog('payload nota crédito v2', JSON.stringify(payload));
    let res = await enviarNotaCredito(token, payload);
    // Según la documentación de Factus, si queda un documento pendiente por
    // enviar a la DIAN se debe eliminar por reference_code y volver a crear.
    if (res.status === 409) {
        const conflicto = await leerErrorFactus(res, 'Nota crédito en conflicto');
        debugLog(conflicto.message);
        await eliminarNotaCreditoNoValidada(token, payload.reference_code);
        res = await enviarNotaCredito(token, payload);
    }
    if (!res.ok) {
        throw await leerErrorFactus(res, 'Crear nota crédito falló');
    }
    // Novedad DIAN 405 ("Documento rechazado") y estados pendientes, según
    // https://developers.factus.com.co/manejo-errores (Versión 2).
    let data = await res.json();
    let estado = evaluarEstadoDian(data);
    if (estado.rechazada) {
        // Factus registró la nota pero la DIAN la rechazó (is_validated false +
        // regla con "Rechazo" en errors). Se elimina por reference_code — se puede
        // reusar la misma referencia — y se reenvía una vez con los mismos datos.
        debugLog(`nota crédito rechazada por la DIAN: ${estado.reglas.join(' | ')}`);
        await eliminarNotaCreditoNoValidada(token, payload.reference_code);
        data = await reenviarNotaCredito(token, payload);
        estado = evaluarEstadoDian(data);
        if (estado.rechazada) {
            // Se elimina la rechazada para no bloquear los próximos envíos del
            // NIT/rango y se reporta el motivo exacto de la DIAN al cliente.
            await eliminarNotaCreditoNoValidada(token, payload.reference_code);
            throw new FactusApiError(`Nota crédito rechazada por la DIAN (novedad 405): ${estado.reglas.join(' | ')}`, 422, { reglas: estado.reglas });
        }
    }
    else if (!estado.validada) {
        // Estado pendiente (ej. la DIAN no respondió a tiempo): el documento NO se
        // elimina; se reintenta el envío con el mismo reference_code y Factus
        // consulta el estado actual en la DIAN sin generar duplicados.
        debugLog('nota crédito aún sin validar en la DIAN; reintentando envío');
        data = await reenviarNotaCredito(token, payload);
        estado = evaluarEstadoDian(data);
        if (!estado.validada && !estado.rechazada) {
            throw new FactusApiError('La nota crédito sigue pendiente de validación por la DIAN. ' +
                'Reintenta más tarde enviando el mismo reference_code; no se eliminó el documento.', 502, { reglas: estado.reglas });
        }
    }
    const billNumber = extraerNumeroDocumento(data);
    debugLog('nota crédito creada', billNumber);
    if (!billNumber)
        throw new FactusApiError('No se recibió número de nota crédito', 502, data);
    return billNumber;
}
async function descargarPDFNotaCredito(token, billNumber) {
    var _a, _b;
    let res = await fetch(`${process.env.FACTUS_URL}/v2/credit-notes/${billNumber}/download-pdf`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
        },
    });
    if (!res.ok) {
        res = await fetch(`${process.env.FACTUS_URL}/v1/credit-notes/download-pdf/${billNumber}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
        });
    }
    if (!res.ok) {
        throw await leerErrorFactus(res, 'Descarga PDF nota crédito falló');
    }
    const data = await res.json();
    const base64 = ((_a = data.data) === null || _a === void 0 ? void 0 : _a.pdf_base_64_encoded) || ((_b = data.data) === null || _b === void 0 ? void 0 : _b.pdf_base64);
    if (!base64)
        throw new FactusApiError('Factus no retornó PDF en base64', 502, data);
    debugLog('PDF nota crédito descargado');
    return Buffer.from(base64, 'base64');
}
const procesarFactura = async (orden) => {
    const token = await getAccessToken();
    let numberingRangeId = orden.numbering_range_id;
    if (!numberingRangeId) {
        try {
            numberingRangeId = await getNumberingRangeId(token, 'factura');
        }
        catch (error) {
            console.warn('FACTUS WARN:', error.message);
            numberingRangeId = undefined;
        }
    }
    const billNumber = await crearFactura(token, orden, numberingRangeId);
    const pdfData = await descargarPDF(token, billNumber);
    return {
        fileName: `factura_${billNumber}.pdf`,
        pdfData
    };
};
exports.procesarFactura = procesarFactura;
const procesarNotaCredito = async (nota) => {
    const token = await getAccessToken();
    const numberingRangeId = nota.numbering_range_id || await getNumberingRangeId(token, 'nota-credito');
    const billNumber = await crearNotaCredito(token, nota, numberingRangeId);
    const pdfData = await descargarPDFNotaCredito(token, billNumber);
    return {
        fileName: `nota_credito_${billNumber}.pdf`,
        pdfData
    };
};
exports.procesarNotaCredito = procesarNotaCredito;
