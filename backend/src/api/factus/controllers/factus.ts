
import { Context } from 'koa';
import { procesarFactura, procesarNotaCredito, type Orden } from '../services/factus';

function autorizado(ctx: Context): boolean {
  const esperado = process.env.FACTUS_API_KEY;
  if (!esperado) return true;
  return ctx.get('x-api-key') === esperado;
}

function responderNoAutorizado(ctx: Context) {
  ctx.status = 401;
  ctx.body = { error: 'No autorizado' };
}

export default {
  generarYDescargar: async (ctx: Context) => {                       //metodo principal
    if (!autorizado(ctx)) return responderNoAutorizado(ctx);

    try {
      const body = (ctx.request as any).body;
      const customer = body.customer ?? {};
      const orden: Orden = {
        customer: { ...customer, documentType: customer.documentType || 'cc' },
        paymentMethod: body.paymentMethod || 'efectivo',
        paymentForm: body.paymentForm,
        item: body.item || [],
        reference_code: body.reference_code,
        numbering_range_id: body.numbering_range_id,
        observation: body.observation,
        operation_type: body.operation_type,
        document: body.document
      };

      const faltantes = ['identification', 'address', 'email', 'phone']
        .filter((campo) => {
          const val = (orden.customer as any)[campo];
          return val === undefined || val === null || val === '';
        });
      // name puede venir como name, names o company
      if (!(orden.customer.name || (orden.customer as any).names || (orden.customer as any).company)) {
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

      const resultado = await procesarFactura(orden);
      
      ctx.set("Content-Type", "application/pdf");
      ctx.set("Content-Disposition", `attachment; filename="${resultado.fileName}"`);
      ctx.body = resultado.pdfData;
      
    } catch (error: any) {
      console.error('FACTUS ERROR:', error.message);
      ctx.status = 500;
      ctx.body = { error: error.message };
    }
  },

  generarNotaCredito: async (ctx: Context) => {
    if (!autorizado(ctx)) return responderNoAutorizado(ctx);

    try {
      const body = (ctx.request as any).body;
      const customer = body.customer ?? {};
      
      if (!body.correction_concept_code) {
        ctx.status = 400;
        ctx.body = { error: "Falta correction_concept_code" };
        return;
      }
      if (!body.bill_number && body.customization_id !== "22") {
        ctx.status = 400;
        ctx.body = { error: "Falta bill_number (factura a afectar)" };
        return;
      }
      if (!body.items || body.items.length === 0) {
        ctx.status = 400;
        ctx.body = { error: "Se requiere al menos un item" };
        return;
      }
      if (!customer.identification) {
        ctx.status = 400;
        ctx.body = { error: "Falta identificación del cliente" };
        return;
      }
      
      const resultado = await procesarNotaCredito({
        ...body,
        customer: { ...customer, documentType: customer.documentType || body.documentType || 'cc' }
      } as any);
      
      ctx.set("Content-Type", "application/pdf");
      ctx.set("Content-Disposition", `attachment; filename="${resultado.fileName}"`);
      ctx.body = resultado.pdfData;
      
    } catch (error: any) {
      console.error('FACTUS NC ERROR:', error.message);
      ctx.status = 500;
      ctx.body = { error: error.message };
    }
  }
};
