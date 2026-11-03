"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const factus_1 = require("../services/factus");
function autorizado(ctx) {
    const esperado = process.env.FACTUS_API_KEY;
    if (!esperado)
        return true;
    return ctx.get('x-api-key') === esperado;
}
function responderNoAutorizado(ctx) {
    ctx.status = 401;
    ctx.body = { error: 'No autorizado' };
}
function texto(value) {
    if (value === undefined || value === null)
        return '';
    return String(value).trim();
}
function responderError(ctx, error) {
    const status = error instanceof factus_1.FactusApiError ? error.status : 500;
    console.error('FACTUS ERROR:', (error === null || error === void 0 ? void 0 : error.message) || error);
    ctx.status = status;
    ctx.body = {
        error: (error === null || error === void 0 ? void 0 : error.message) || 'Error procesando el documento',
        ...(error instanceof factus_1.FactusApiError && error.details ? { detalle: error.details } : {}),
    };
}
exports.default = {
    // Diagnóstico rápido para verificar qué versión está desplegada.
    estado: async (ctx) => {
        let factusHost = null;
        try {
            factusHost = process.env.FACTUS_URL ? new URL(process.env.FACTUS_URL).host : null;
        }
        catch {
            factusHost = process.env.FACTUS_URL || null;
        }
        ctx.status = 200;
        ctx.body = {
            ok: true,
            servicio: 'factus',
            factusHost,
            rutas: [
                'POST /api/factus/generar',
                'POST /api/factus/nota-credito',
                'GET /api/factus/estado',
            ],
        };
    },
    generarYDescargar: async (ctx) => {
        var _a, _b;
        if (!autorizado(ctx))
            return responderNoAutorizado(ctx);
        try {
            const body = (_a = ctx.request.body) !== null && _a !== void 0 ? _a : {};
            const customer = (_b = body.customer) !== null && _b !== void 0 ? _b : {};
            const orden = {
                customer: { ...customer, documentType: customer.documentType || 'cc' },
                paymentMethod: body.paymentMethod || 'efectivo',
                paymentForm: body.paymentForm,
                item: Array.isArray(body.item) ? body.item : [],
                reference_code: texto(body.reference_code) || undefined,
                numbering_range_id: body.numbering_range_id,
                observation: body.observation,
                operation_type: body.operation_type,
                document: body.document
            };
            const faltantes = ['identification', 'address', 'email', 'phone']
                .filter((campo) => {
                const val = orden.customer[campo];
                return val === undefined || val === null || val === '';
            });
            // name puede venir como name, names o company
            if (!(orden.customer.name || orden.customer.names || orden.customer.company)) {
                faltantes.push('name');
            }
            if (faltantes.length || !orden.item.length) {
                ctx.status = 400;
                ctx.body = {
                    error: "Orden incompleta",
                    camposFaltantes: faltantes,
                };
                return;
            }
            const resultado = await (0, factus_1.procesarFactura)(orden);
            ctx.set("Content-Type", "application/pdf");
            ctx.set("Content-Disposition", `attachment; filename="${resultado.fileName}"`);
            ctx.body = resultado.pdfData;
        }
        catch (error) {
            responderError(ctx, error);
        }
    },
    generarNotaCredito: async (ctx) => {
        var _a, _b;
        if (!autorizado(ctx))
            return responderNoAutorizado(ctx);
        try {
            const body = (_a = ctx.request.body) !== null && _a !== void 0 ? _a : {};
            const customer = (_b = body.customer) !== null && _b !== void 0 ? _b : {};
            const items = Array.isArray(body.items)
                ? body.items
                : (Array.isArray(body.item) ? body.item : []);
            // Factus espera estos campos como string. Normalizamos por si el frontend
            // o un cliente externo envía números.
            const correctionConceptCode = texto(body.correction_concept_code);
            const customizationId = texto(body.customization_id) || '20';
            const billNumber = texto(body.bill_number);
            const documentType = texto(customer.documentType || body.documentType || 'cc').toLowerCase();
            if (!correctionConceptCode) {
                ctx.status = 400;
                ctx.body = { error: "Falta correction_concept_code" };
                return;
            }
            if (!billNumber && customizationId !== "22") {
                ctx.status = 400;
                ctx.body = { error: "Falta bill_number (factura a afectar)" };
                return;
            }
            if (items.length === 0) {
                ctx.status = 400;
                ctx.body = { error: "Se requiere al menos un item" };
                return;
            }
            const faltantesCliente = [];
            if (!texto(customer.identification))
                faltantesCliente.push('identification');
            if (documentType === 'nit' && !(customer.company || customer.name)) {
                faltantesCliente.push('company');
            }
            if (documentType !== 'nit' && !(customer.name || customer.names)) {
                faltantesCliente.push('name');
            }
            const faltantesItems = items.map((item, index) => {
                const faltantes = [];
                if (!texto(item.code || item.code_reference))
                    faltantes.push('code');
                if (!texto(item.name))
                    faltantes.push('name');
                if (!(Number(item.price) > 0))
                    faltantes.push('price');
                if (!(Number(item.quantity) > 0))
                    faltantes.push('quantity');
                return faltantes.length ? { item: index + 1, camposFaltantes: faltantes } : null;
            }).filter(Boolean);
            if (faltantesCliente.length || faltantesItems.length) {
                ctx.status = 400;
                ctx.body = {
                    error: "Nota crédito incompleta",
                    camposFaltantes: faltantesCliente,
                    itemsInvalidos: faltantesItems,
                };
                return;
            }
            const resultado = await (0, factus_1.procesarNotaCredito)({
                ...body,
                correction_concept_code: correctionConceptCode,
                customization_id: customizationId,
                bill_number: billNumber || undefined,
                reference_code: texto(body.reference_code) || undefined,
                customer: { ...customer, documentType },
                items,
            });
            ctx.set("Content-Type", "application/pdf");
            ctx.set("Content-Disposition", `attachment; filename="${resultado.fileName}"`);
            ctx.body = resultado.pdfData;
        }
        catch (error) {
            responderError(ctx, error);
        }
    }
};
