import { describe, expect, it } from 'vitest';
import {
  calcularTotales,
  construirPayloadFactura,
  construirPayloadFacturaV1,
  construirPayloadNotaCredito,
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
  it('calcula subtotal, IVA y total de un item', () => {
    const totales = calcularTotales([
      { code: 'A', name: 'A', price: 50000, quantity: 1 },
    ]);

    expect(totales).toEqual({ subtotal: 50000, impuestos: 9500, total: 59500 });
  });

  it('suma varios items', () => {
    const totales = calcularTotales([
      { code: 'A', name: 'A', price: 50000, quantity: 1 },
      { code: 'B', name: 'B', price: 35000, quantity: 2 },
    ]);

    expect(totales).toEqual({ subtotal: 120000, impuestos: 22800, total: 142800 });
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

    expect(totales).toEqual({ subtotal: 45000, impuestos: 2250, total: 47250 });
  });
});

describe('construirPayloadFactura', () => {
  it('envía el monto del pago con IVA incluido y el precio unitario sin IVA', () => {
    const payload = construirPayloadFactura(crearOrden(), 8);

    expect(payload.numbering_range_id).toBe(8);
    expect(payload.payment_details[0].amount).toBe('59500.00');
    expect(payload.items[0].price).toBe('50000.00');
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
  it('no multiplica el precio por IVA (evita doble impuesto)', () => {
    const payload = construirPayloadFacturaV1(crearOrden(), 8);

    expect(payload.items[0].price).toBe(50000);
    expect(payload.items[0].tax_rate).toBe('19.00');
  });
});

describe('construirPayloadNotaCredito', () => {
  it('envía monto con IVA, bill_number y rango de nota crédito', () => {
    const payload = construirPayloadNotaCredito(crearNota(), 21);

    expect(payload.bill_number).toBe('SETP990002519');
    expect(payload.numbering_range_id).toBe(21);
    expect(payload.payment_details[0].amount).toBe('59500.00');
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
