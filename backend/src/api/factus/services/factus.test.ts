import { describe, expect, it } from 'vitest';
import {
  calcularTotales,
  construirPayloadFactura,
  construirPayloadFacturaV1,
  construirPayloadNotaCredito,
  evaluarEstadoDian,
  seleccionarRangoNumeracion,
  type NotaCredito,
  type Orden,
} from './factus';

function crearOrden(overrides: Partial<Orden> = {}): Orden {
  return {
    customer: {
      identification: '1023456789',
      documentType: 'cc',
      name: 'Juan Perez',
      address: 'Calle 123 #45-67',
      email: 'juan@example.com',
      phone: '3001234567',
    },
    paymentMethod: 'efectivo',
    paymentForm: '1',
    reference_code: 'REF-TEST',
    item: [
      { code: 'CUADRO-01', name: 'Cuadro decorativo', price: 50000, quantity: 1 },
    ],
    ...overrides,
  };
}

function crearNota(overrides: Partial<NotaCredito> = {}): NotaCredito {
  return {
    bill_number: 'SETP990002519',
    correction_concept_code: '2',
    reference_code: 'NC-TEST',
    customer: {
      identification: '1023456789',
      documentType: 'cc',
      name: 'Juan Perez',
      address: 'Calle 123 #45-67',
      email: 'juan@example.com',
      phone: '3001234567',
    },
    items: [
      { code: 'CUADRO-01', name: 'Cuadro decorativo', price: 50000, quantity: 1 },
    ],
    ...overrides,
  };
}

describe('calcularTotales', () => {
  it('calcula base, IVA y total de un item con precio final', () => {
    const totales = calcularTotales([
      { code: 'A', name: 'A', price: 50000, quantity: 1 },
    ]);

    expect(totales).toEqual({ subtotal: 42016.81, impuestos: 7983.19, total: 50000 });
  });

  it('suma varios items', () => {
    const totales = calcularTotales([
      { code: 'A', name: 'A', price: 50000, quantity: 1 },
      { code: 'B', name: 'B', price: 35000, quantity: 2 },
    ]);

    expect(totales).toEqual({ subtotal: 100840.34, impuestos: 19159.66, total: 120000 });
  });

  it('aplica descuento y respeta impuestos personalizados', () => {
    const totales = calcularTotales([
      {
        code: 'A',
        name: 'A',
        price: 50000,
        quantity: 1,
        discount_rate: 10,
        taxes: [{ code: '01', rate: 5 }],
      },
    ]);

    expect(totales).toEqual({ subtotal: 42857.14, impuestos: 2142.86, total: 45000 });
  });
});

describe('construirPayloadFactura', () => {
  it('envía el total final y el precio neto (sin IVA) a Factus v2', () => {
    const payload = construirPayloadFactura(crearOrden(), 8);

    expect(payload.numbering_range_id).toBe(8);
    expect(payload.payment_details[0].amount).toBe('50000.00');
    expect(payload.items[0].price).toBe('42016.81');
    expect(payload.items[0].taxes[0]).toEqual({ code: '01', rate: '19.00' });
  });

  it('agrega fecha de vencimiento cuando el pago es a crédito', () => {
    const payload = construirPayloadFactura(crearOrden({ paymentForm: '2' }));

    expect(payload.payment_details[0].payment_form).toBe('2');
    expect(payload.payment_details[0].due_date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it('usa names para persona natural y company para NIT', () => {
    const natural = construirPayloadFactura(crearOrden());
    expect(natural.customer.names).toBe('Juan Perez');
    expect(natural.customer.company).toBeUndefined();

    const juridica = construirPayloadFactura(crearOrden({
      customer: {
        identification: '900123456',
        documentType: 'nit',
        dv: '7',
        name: 'Empresa SAS',
        company: 'Empresa SAS',
        address: 'Calle 123',
        email: 'empresa@example.com',
        phone: '3001234567',
      },
    }));

    expect(juridica.customer.company).toBe('Empresa SAS');
    expect(juridica.customer.dv).toBe('7');
    expect(juridica.customer.legal_organization_code).toBe('1');
  });

  it('respeta el municipio enviado por el cliente', () => {
    const payload = construirPayloadFactura(crearOrden({
      customer: {
        ...crearOrden().customer,
        municipality_code: '05001',
      },
    }));

    expect(payload.customer.municipality_code).toBe('05001');
  });
});

describe('construirPayloadFacturaV1', () => {
  it('envía el precio final con IVA incluido y coincide con el total de v2', () => {
    const orden = crearOrden();
    const payload = construirPayloadFacturaV1(orden, 8);
    const totalV2 = calcularTotales(orden.item).total;

    expect(payload.items[0].price).toBe(50000);
    expect(payload.items[0].tax_rate).toBe('19.00');
    expect(payload.items[0].price * payload.items[0].quantity).toBe(totalV2);
  });

  it('respeta impuestos personalizados sin alterar el precio final', () => {
    const payload = construirPayloadFacturaV1(crearOrden({
      item: [
        {
          code: 'A',
          name: 'A',
          price: 50000,
          quantity: 1,
          taxes: [{ code: '01', rate: 5 }],
        },
      ],
    }));

    expect(payload.items[0].price).toBe(50000);
    expect(payload.items[0].tax_rate).toBe('5.00');
  });
});

describe('construirPayloadNotaCredito', () => {
  it('usa el mismo total y precio neto que la factura', () => {
    const payload = construirPayloadNotaCredito(crearNota(), 21);

    expect(payload.bill_number).toBe('SETP990002519');
    expect(payload.numbering_range_id).toBe(21);
    expect(payload.payment_details[0].amount).toBe('50000.00');
    expect(payload.items[0].price).toBe('42016.81');
    expect(payload.items[0].taxes[0]).toEqual({ code: '01', rate: '19.00' });
  });

  it('respeta payment_details explícitos', () => {
    const payload = construirPayloadNotaCredito(crearNota({
      payment_details: [
        { payment_form: '1', payment_method_code: '10', amount: '12345.00' },
      ],
    }));

    expect(payload.payment_details[0].amount).toBe('12345.00');
  });
});

describe('seleccionarRangoNumeracion', () => {
  const rangos = [
    { id: 8, document: 'Factura electrónica de venta' },
    { id: 21, document: 'Nota crédito' },
  ];

  it('selecciona el rango de factura', () => {
    expect(seleccionarRangoNumeracion(rangos, 'factura')?.id).toBe(8);
  });

  it('selecciona el rango de nota crédito', () => {
    expect(seleccionarRangoNumeracion(rangos, 'nota-credito')?.id).toBe(21);
  });

  it('ignora tildes y mayúsculas', () => {
    const resultado = seleccionarRangoNumeracion(
      [{ id: 5, document: 'NOTA CREDITO ELECTRÓNICA' }],
      'nota-credito'
    );

    expect(resultado?.id).toBe(5);
  });
});

describe('evaluarEstadoDian', () => {
  const respuestaValidada = {
    status: 'Created',
    message: 'Documento con el código de referencia NC-TEST registrado y validado con éxito',
    data: {
      credit_note: {
        number: 'NC76',
        is_validated: true,
        validated_at: '20-09-2024 09:13:43 AM',
        errors: ['Regla: RUT01, Notificación: ...'],
      },
    },
  };

  it('marca como validada cuando is_validated es true', () => {
    const estado = evaluarEstadoDian(respuestaValidada);

    expect(estado.validada).toBe(true);
    expect(estado.rechazada).toBe(false);
  });

  it('detecta la novedad 405 con la regla de rechazo de la DIAN', () => {
    const estado = evaluarEstadoDian({
      status: 'Created',
      message: 'Documento registrado',
      data: {
        credit_note: {
          number: 'NC77',
          is_validated: false,
          errors: [
            'Regla: FAU02, Rechazo: El Valor Bruto antes de tributos no es igual a la suma',
            'Regla: CAK55, Notificación: Correo electrónico no informado',
          ],
        },
      },
    });

    expect(estado.validada).toBe(false);
    expect(estado.rechazada).toBe(true);
    expect(estado.reglas).toHaveLength(2);
  });

  it('detecta la novedad 405 aunque la regla venga con tildes o en otro campo', () => {
    const estado = evaluarEstadoDian({
      credit_note: {
        is_validated: false,
      },
      errors: [
        { message: 'Regla: FAJ43b, Rechazo: razon del rechazo' },
      ],
    });

    expect(estado.rechazada).toBe(true);
  });

  it('trata como pendiente (no rechazada) cuando no hay "Rechazo" en errors', () => {
    const estado = evaluarEstadoDian({
      status: 'Created',
      data: {
        credit_note: {
          is_validated: false,
          errors: ['Regla: RUT01, Notificación: se validará el estado del RUT'],
        },
      },
    });

    expect(estado.validada).toBe(false);
    expect(estado.rechazada).toBe(false);
  });

  it('trata como pendiente la respuesta sin datos de la nota', () => {
    const estado = evaluarEstadoDian({ status: 'Created', message: 'otro mensaje' });

    expect(estado.validada).toBe(false);
    expect(estado.rechazada).toBe(false);
    expect(estado.reglas).toEqual([]);
  });
});
