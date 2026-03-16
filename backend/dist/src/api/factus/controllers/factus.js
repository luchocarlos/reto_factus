"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const factus_1 = require("../services/factus");
exports.default = {
    generarYDescargar: async (ctx) => {
        var _a;
        console.log('FACTUS RECEIVED:', ctx.request.body);
        try {
            const body = ctx.request.body;
            const orden = {
                customer: body.customer,
                item: body.item || []
            };
            if (!orden.customer || !((_a = orden.item) === null || _a === void 0 ? void 0 : _a.length)) {
                ctx.status = 400;
                ctx.body = { error: "Orden incompleta" };
                return;
            }
            const resultado = await (0, factus_1.procesarFactura)(orden);
            ctx.set("Content-Type", "application/pdf");
            ctx.set("Content-Disposition", `attachment; filename=${resultado.fileName}`);
            ctx.body = resultado.pdfData;
        }
        catch (error) {
            console.error('FACTUS ERROR:', error.message);
            ctx.status = 500;
            ctx.body = { error: error.message };
        }
    }
};
