
import { Context } from 'koa';
import { procesarFactura, type Orden } from '../services/factus';


export default {
  generarYDescargar: async (ctx: Context) => {                       //metodo principal
    console.log('FACTUS RECEIVED:', (ctx.request as any).body);
    
    try {
      const body = (ctx.request as any).body;
      const orden: Orden = {
        customer: body.customer,
        item: body.item || []
      };
      
      if (!orden.customer || !orden.item?.length) {
        ctx.status = 400;
        ctx.body = { error: "Orden incompleta" };
        return;
      }

      const resultado = await procesarFactura(orden);
      
      ctx.set("Content-Type", "application/pdf");
      ctx.set("Content-Disposition", `attachment; filename=${resultado.fileName}`);
      ctx.body = resultado.pdfData;
      
    } catch (error: any) {
      console.error('FACTUS ERROR:', error.message);
      ctx.status = 500;
      ctx.body = { error: error.message };
    }
  }
};
