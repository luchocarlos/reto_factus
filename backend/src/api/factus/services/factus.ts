export type ItemOrden = {
  code: string;
  code_reference?: string;
  name: string;
  price: number;
  quantity: number;
  unit_measure_code?: string;
  standard_code?: string;
  discount_rate?: number | string;
  taxes?: Array<{ code: string; rate: string | number }>;
};

export type Orden = {                   //datos para construir la factura
  customer: {
    identification: string;
    documentType: string;   // cc | nit
    dv?: string;            // digito de verificacion (solo NIT)
    name: string;
    address: string;
    email: string;
    phone: string;
    identification_document_code?: string; // codigo de documento para v2
    legal_organization_code?: string;     // tipo organizacion
    tribute_code?: string;                // tributo
    municipality_code?: string;
    country_code?: string;
    responsibilities?: string[];
    company?: string;
    trade_name?: string;
    names?: string;
  };
  paymentMethod: string;   // efectivo | tarjeta
  paymentForm?: string;    // forma de pago (1 contado, 2 credito)
  item: ItemOrden[];
  reference_code?: string;
  numbering_range_id?: number;
  observation?: string;
  operation_type?: string;
  document?: string;
};

export type NotaCredito = {
  reference_code?: string;
  correction_concept_code: string; // codigo de correccion
  customization_id?: string; // 20 por defecto
  bill_number?: string;
  numbering_range_id?: number;
  observation?: string;
  payment_details?: Array<{
    payment_form: string;
    payment_method_code: string;
    reference_code?: string;
    amount: string;
    due_date?: string;
  }>;
  customer: {
    identification_document_code?: string;
    identification: string;
    dv?: string;
    company?: string;
    trade_name?: string;
    names?: string;
    address?: string;
    email?: string;
    phone?: string;
    legal_organization_code?: string;
    tribute_code?: string;
    country_code?: string;
    responsibilities?: string[];
    municipality_code?: string;
    documentType?: string;
    name?: string;
  };
  items: ItemOrden[];
};

export type TipoRango = 'factura' | 'nota-credito';

// mapeo para v2
const DOCUMENT_CODES_V2: Record<string, string> = {
  cc:  "13",   // cedula de ciudadania
  nit: "31",   // NIT
};

const PAYMENT_METHOD_CODES_V2: Record<string, string> = {
  efectivo: "10",   // efectivo
  tarjeta:  "48",   // tarjeta de credito
};

const IVA_RATE = 19;
const UNIT_MEASURE_CODE = "94";          // unidad (comun en v2)
const STANDARD_CODE = "999";             // estandar de adopcion del contribuyente
const MUNICIPALITY_CODE = "11001";       // Bogota D.C. (codigo correcto segun DIVIPOLA)
const DEFAULT_TRIBUTE_CODE = "ZZ";       // no aplica
const DEFAULT_LEGAL_ORG_NATURAL = "2";   // persona natural
const DEFAULT_LEGAL_ORG_JURIDICA = "1";  // persona juridica

function debugLog(...args: unknown[]) {
  if (process.env.FACTUS_DEBUG === 'true') {
    console.log('[factus]', ...args);
  }
}

const round2 = (value: number) => Math.round((value + Number.EPSILON) * 100) / 100;
const money = (value: number) => round2(value).toFixed(2);

function nuevoReferenceCode(prefijo: string): string {
  const aleatorio = Math.random().toString(36).slice(2, 8);
  return `${prefijo}-${Date.now()}-${aleatorio}`;
}

export class FactusApiError extends Error {
  status: number;
  details?: unknown;

  constructor(message: string, status = 502, details?: unknown) {
    super(message);
    this.name = 'FactusApiError';
    this.status = status;
    this.details = details;
  }
}

// Convierte la respuesta de error de Factus en un error con el status HTTP
// original (400, 409, 422, etc.) para que el frontend pueda mostrar el motivo.
async function leerErrorFactus(res: Response, contexto: string): Promise<FactusApiError> {
  const raw = await res.text();
  let mensaje = raw;
  let details: unknown = raw;

  try {
    const json: any = JSON.parse(raw);
    details = json;
    const candidato = json.message ?? json.error ?? json.errors ?? raw;
    mensaje = typeof candidato === 'string' ? candidato : JSON.stringify(candidato);
  } catch {
    // La respuesta no era JSON; dejamos el texto plano.
  }

  const status = res.status >= 400 && res.status < 500 ? res.status : 502;
  return new FactusApiError(
    `${contexto} (${res.status}): ${mensaje || res.statusText}`,
    status,
    details
  );
}

function extraerNumeroDocumento(data: any): string | undefined {
  return data?.data?.number
    ?? data?.data?.bill?.number
    ?? data?.data?.credit_note?.number
    ?? data?.data?.credit_note_number
    ?? data?.data?.bill_number
    ?? data?.number
    ?? data?.bill_number;
}

export type EstadoDian = {
  validada: boolean;   // is_validated true (v2) o status 1 (v1)
  rechazada: boolean;  // sin validar y errores con "Rechazo" -> novedad 405
  reglas: string[];    // mensajes de las reglas DIAN (FAJ43b, FAU02, ...)
};

// Reúne los mensajes de las reglas DIAN que Factus reporta en la respuesta.
// Pueden venir como arreglo de strings, arreglo de objetos con `message` o
// diccionario campo -> errores (formato de validación 422).
function coleccionarReglasDian(data: any): string[] {
  const reglas: string[] = [];

  const agregar = (valor: unknown) => {
    if (valor === undefined || valor === null) return;
    if (Array.isArray(valor)) {
      valor.forEach(agregar);
      return;
    }
    if (typeof valor === 'object') {
      const item = valor as any;
      agregar(item.message ?? item.errors ?? null);
      return;
    }
    reglas.push(String(valor));
  };

  const registro = data?.data?.credit_note
    ?? data?.credit_note
    ?? data?.data?.bill
    ?? data?.bill;

  agregar(registro?.errors ?? null);
  if (reglas.length === 0) agregar(data?.errors ?? null);

  return reglas;
}

// Clasifica la respuesta según "Manejo de respuestas API FACTUS" (Versión 2):
// - Validada: is_validated true.
// - Rechazada (novedad DIAN 405): sin validar y en `errors` viene "Rechazo".
// - Cualquier otro caso sin validar queda como pendiente (ej. la DIAN no
//   respondió a tiempo), que NO se debe eliminar.
export function evaluarEstadoDian(data: any): EstadoDian {
  const registro = data?.data?.credit_note
    ?? data?.credit_note
    ?? data?.data?.bill
    ?? data?.bill;

  const validada = registro
    ? registro.is_validated === true
      || registro.status === 1
      || (typeof registro.validated_at === 'string' && registro.validated_at.length > 0)
    : normalizarTexto(data?.message).includes('validada con exito');

  const reglas = coleccionarReglasDian(data);
  const rechazada = !validada && reglas.some((regla) => normalizarTexto(regla).includes('rechaz'));

  return { validada, rechazada, reglas };
}

export function calcularTotales(items: ItemOrden[], ivaRate: number = IVA_RATE) {
  let subtotal = 0;
  let total = 0;

  for (const item of items) {
    const cantidad = Number(item.quantity) || 0;
    const precio = Number(item.price) || 0;
    const descuento = Number(item.discount_rate ?? 0) || 0;
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

function normalizarTexto(value: unknown): string {
  return String(value ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

export function seleccionarRangoNumeracion(rangos: any[], tipo: TipoRango): any | undefined {
  const documentos = rangos.map((rango) => ({
    rango,
    texto: normalizarTexto(
      rango?.document ?? rango?.document_type ?? rango?.name ?? rango?.description
    ),
  }));

  if (tipo === 'factura') {
    return documentos.find(({ texto }) => texto.includes('factura'))?.rango;
  }

  return documentos.find(({ texto }) => texto.includes('nota') && texto.includes('credito'))?.rango;
}

function fechaVencimiento(dias: number): string {
  const fecha = new Date();
  fecha.setUTCDate(fecha.getUTCDate() + dias);
  return fecha.toISOString().slice(0, 10);
}

function construirCliente(customer: Orden['customer'] | NotaCredito['customer']) {
  const documentType = (customer.documentType || 'cc').toLowerCase();
  const isNit = documentType === 'nit';
  const identificationDocumentCode =
    customer.identification_document_code || DOCUMENT_CODES_V2[documentType] || DOCUMENT_CODES_V2.cc;

  const cliente: Record<string, any> = {
    identification_document_code: identificationDocumentCode,
    identification: customer.identification,
    legal_organization_code:
      customer.legal_organization_code ||
      (isNit ? DEFAULT_LEGAL_ORG_JURIDICA : DEFAULT_LEGAL_ORG_NATURAL),
    tribute_code: customer.tribute_code || DEFAULT_TRIBUTE_CODE,
    municipality_code: customer.municipality_code || MUNICIPALITY_CODE,
    country_code: customer.country_code || "CO",
  };

  if (customer.address) cliente.address = customer.address;
  if (customer.email) cliente.email = customer.email;
  if (customer.phone) cliente.phone = customer.phone;

  if (customer.responsibilities && Array.isArray(customer.responsibilities)) {
    cliente.responsibilities = customer.responsibilities;
  } else {
    cliente.responsibilities = ["R-99-PN"];
  }

  if (isNit) {
    cliente.company = customer.company || customer.name || '';
    if (customer.trade_name) cliente.trade_name = customer.trade_name;
    if (customer.dv) cliente.dv = customer.dv;
  } else {
    cliente.names = customer.names || customer.name || '';
  }

  return cliente;
}

function construirItems(items: ItemOrden[]) {
  return items.map((item) => {
    const precio = Number(item.price) || 0;
    const descuento = Number(item.discount_rate ?? 0) || 0;
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

export function construirPayloadFactura(orden: Orden, numberingRangeId?: number) {
  const documentType = (orden.customer.documentType || 'cc').toLowerCase();
  const paymentMethodCode =
    PAYMENT_METHOD_CODES_V2[orden.paymentMethod] || PAYMENT_METHOD_CODES_V2.efectivo;
  const paymentForm = orden.paymentForm || "1"; // 1 contado por defecto
  const totales = calcularTotales(orden.item);

  const detallePago: Record<string, any> = {
    payment_form: paymentForm,
    payment_method_code: paymentMethodCode,
    amount: money(totales.total),
  };

  if (paymentForm === '2') {
    detallePago.due_date = fechaVencimiento(30);
  }

  const payload: Record<string, any> = {
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

export function construirPayloadFacturaV1(orden: Orden, numberingRangeId?: number) {
  const documentType = (orden.customer.documentType || 'cc').toLowerCase();
  const isNit = documentType === 'nit';
  const paymentMethodCode =
    PAYMENT_METHOD_CODES_V2[orden.paymentMethod] || PAYMENT_METHOD_CODES_V2.efectivo;

  const payload: Record<string, any> = {
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
      const descuento = Number(it.discount_rate ?? 0) || 0;
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
    if (orden.customer.dv) payload.customer.dv = orden.customer.dv;
  } else {
    payload.customer.names = orden.customer.names || orden.customer.name;
  }

  return payload;
}

export function construirPayloadNotaCredito(nota: NotaCredito, numberingRangeId?: number) {
  const totales = calcularTotales(nota.items);

  const paymentDetails = (nota.payment_details && nota.payment_details.length > 0
    ? nota.payment_details
    : [
        {
          payment_form: "1",
          payment_method_code: "10",
          amount: money(totales.total),
        },
      ]
  ).map((pago) => {
    const detalle: Record<string, any> = {
      payment_form: String(pago.payment_form),
      payment_method_code: String(pago.payment_method_code),
      amount: typeof pago.amount === 'string'
        ? pago.amount
        : money(Number(pago.amount) || totales.total),
    };

    if (pago.reference_code) detalle.reference_code = String(pago.reference_code);
    if (pago.due_date) detalle.due_date = String(pago.due_date);

    return detalle;
  });

  const payload: Record<string, any> = {
    reference_code: nota.reference_code || nuevoReferenceCode('NC'),
    correction_concept_code: String(nota.correction_concept_code),
    customization_id: String(nota.customization_id || "20"),
    observation: nota.observation || "Nota crédito",
    payment_details: paymentDetails,
    customer: construirCliente(nota.customer),
    items: construirItems(nota.items),
  };

  if (nota.bill_number) payload.bill_number = String(nota.bill_number);
  if (numberingRangeId) payload.numbering_range_id = numberingRangeId;

  return payload;
}

// ── 1. Obtener token OAuth ──────────────────────────────────────────────────
async function getAccessToken(): Promise<string> {
  const body = new URLSearchParams({
    grant_type:    'password',                           // autenticación
    client_id:     process.env.FACTUS_CLIENT_ID!,
    client_secret: process.env.FACTUS_CLIENT_SECRET!,
    username:      process.env.FACTUS_USERNAME!,
    password:      process.env.FACTUS_PASSWORD!,
  });

  const res = await fetch(`${process.env.FACTUS_URL}/oauth/token`, {   // solicitud de token
    method:  'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body:    body.toString(),
  });

  if (!res.ok) {
    const error = await leerErrorFactus(res, 'Auth Factus falló');
    throw new FactusApiError(error.message, 502, error.details);
  }

  const data = await res.json() as { access_token: string };
  debugLog('token obtenido');
  return data.access_token;
}

// ── 2. Obtener rango de numeración ──────────────────────────────────────────
async function getRangosNumeracion(token: string): Promise<any[]> {
  const res = await fetch(`${process.env.FACTUS_URL}/v1/numbering-ranges`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept':        'application/json',
    },
  });

  if (!res.ok) {
    const error = await leerErrorFactus(res, 'Rangos de numeración falló');
    throw new FactusApiError(error.message, 502, error.details);
  }

  const data = await res.json() as { data?: any };
  const rangos = data.data?.data ?? data.data ?? [];
  return Array.isArray(rangos) ? rangos : [];
}

async function getNumberingRangeId(token: string, tipo: TipoRango): Promise<number> {
  const rangos = await getRangosNumeracion(token);
  const elegido = seleccionarRangoNumeracion(rangos, tipo);

  if (elegido?.id) {
    debugLog(`rango ${tipo} seleccionado:`, elegido.id, elegido.document);
    return elegido.id;
  }

  const disponibles = rangos
    .map((rango) => rango?.document ?? rango?.document_type ?? rango?.name)
    .filter(Boolean)
    .join(', ');

  throw new Error(
    `No hay rango de numeración activo para ${tipo}` +
    (disponibles ? `. Disponibles: ${disponibles}` : '')
  );
}

// ── 3. Crear y validar factura ──────────────────────────────────────────────
async function crearFactura(token: string, orden: Orden, numberingRangeId?: number): Promise<string> {
  const payload = construirPayloadFactura(orden, numberingRangeId);

  debugLog('payload factura v2', JSON.stringify(payload));

  let res = await fetch(`${process.env.FACTUS_URL}/v2/bills/validate`, {
    method:  'POST',
    headers: {
      'Content-Type':  'application/json',
      'Authorization': `Bearer ${token}`,
      'Accept':        'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const v2Error = await leerErrorFactus(res, 'Crear factura v2 falló');
    debugLog('v2 falló, intentando v1:', v2Error.message);

    res = await fetch(`${process.env.FACTUS_URL}/v1/bills/validate`, {
      method:  'POST',
      headers: {
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`,
        'Accept':        'application/json',
      },
      body: JSON.stringify(construirPayloadFacturaV1(orden, numberingRangeId)),
    });

    if (!res.ok) {
      const v1Error = await leerErrorFactus(res, 'Crear factura v1 falló');
      throw new FactusApiError(
        `${v1Error.message}. Detalle v2: ${v2Error.message}`,
        v1Error.status,
        v1Error.details
      );
    }
  }

  const data: any = await res.json();
  const billNumber = extraerNumeroDocumento(data);
  debugLog('factura creada', billNumber);

  if (!billNumber) throw new FactusApiError('No se recibió número de factura', 502, data);
  return billNumber;
}

// ── 4. Descargar PDF ────────────────────────────────────────────────────────
async function descargarPDF(token: string, billNumber: string): Promise<Buffer> {
  // Intentar v2 primero
  let res = await fetch(`${process.env.FACTUS_URL}/v2/bills/${billNumber}/download-pdf`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept':        'application/json',
    },
  });

  if (!res.ok) {
    res = await fetch(`${process.env.FACTUS_URL}/v1/bills/download-pdf/${billNumber}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept':        'application/json',
      },
    });
  }

  if (!res.ok) {
    throw await leerErrorFactus(res, 'Descarga PDF falló');
  }

  const data = await res.json() as { data?: { pdf_base_64_encoded?: string, pdf_base64?: string } };
  const base64 = data.data?.pdf_base_64_encoded || data.data?.pdf_base64;
  if (!base64) throw new FactusApiError('Factus no retornó PDF en base64', 502, data);

  debugLog('PDF descargado');
  return Buffer.from(base64, 'base64');
}

async function enviarNotaCredito(token: string, payload: Record<string, any>): Promise<Response> {
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

async function eliminarNotaCreditoNoValidada(token: string, referenceCode: string): Promise<void> {
  const res = await fetch(
    `${process.env.FACTUS_URL}/v2/credit-notes/reference/${encodeURIComponent(referenceCode)}`,
    {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
      },
    }
  );

  if (!res.ok) {
    const error = await leerErrorFactus(res, 'Eliminar nota crédito no validada falló');
    debugLog(error.message);
  }
}

// Reenvía la nota con el mismo payload. Factus es idempotente por
// reference_code, así que reintentar no genera duplicados. Si responde 409 hay
// un documento represado de envíos anteriores con ese NIT/rango: se elimina y
// se vuelve a intentar.
async function reenviarNotaCredito(token: string, payload: Record<string, any>): Promise<any> {
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

async function crearNotaCredito(token: string, nota: NotaCredito, numberingRangeId?: number): Promise<string> {
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
  let data: any = await res.json();
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
      throw new FactusApiError(
        `Nota crédito rechazada por la DIAN (novedad 405): ${estado.reglas.join(' | ')}`,
        422,
        { reglas: estado.reglas }
      );
    }
  } else if (!estado.validada) {
    // Estado pendiente (ej. la DIAN no respondió a tiempo): el documento NO se
    // elimina; se reintenta el envío con el mismo reference_code y Factus
    // consulta el estado actual en la DIAN sin generar duplicados.
    debugLog('nota crédito aún sin validar en la DIAN; reintentando envío');
    data = await reenviarNotaCredito(token, payload);
    estado = evaluarEstadoDian(data);

    if (!estado.validada && !estado.rechazada) {
      throw new FactusApiError(
        'La nota crédito sigue pendiente de validación por la DIAN. ' +
        'Reintenta más tarde enviando el mismo reference_code; no se eliminó el documento.',
        502,
        { reglas: estado.reglas }
      );
    }
  }

  const billNumber = extraerNumeroDocumento(data);
  debugLog('nota crédito creada', billNumber);

  if (!billNumber) throw new FactusApiError('No se recibió número de nota crédito', 502, data);
  return billNumber;
}

async function descargarPDFNotaCredito(token: string, billNumber: string): Promise<Buffer> {
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

  const data = await res.json() as { data?: { pdf_base_64_encoded?: string, pdf_base64?: string } };
  const base64 = data.data?.pdf_base_64_encoded || data.data?.pdf_base64;
  if (!base64) throw new FactusApiError('Factus no retornó PDF en base64', 502, data);

  debugLog('PDF nota crédito descargado');
  return Buffer.from(base64, 'base64');
}

export const procesarFactura = async (orden: Orden) => {
  const token = await getAccessToken();
  let numberingRangeId = orden.numbering_range_id;

  if (!numberingRangeId) {
    try {
      numberingRangeId = await getNumberingRangeId(token, 'factura');
    } catch (error: any) {
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

export const procesarNotaCredito = async (nota: NotaCredito) => {
  const token = await getAccessToken();
  const numberingRangeId =
    nota.numbering_range_id || await getNumberingRangeId(token, 'nota-credito');

  const billNumber = await crearNotaCredito(token, nota, numberingRangeId);
  const pdfData = await descargarPDFNotaCredito(token, billNumber);

  return {
    fileName: `nota_credito_${billNumber}.pdf`,
    pdfData
  };
};
