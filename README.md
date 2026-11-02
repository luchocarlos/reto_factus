<<<<<<< HEAD
# Reto Factus

Demo full stack de facturación electrónica en Colombia usando la API de [Factus](https://www.factus.com.co/), con panel de compra y generación de nota crédito.

- **Frontend:** React + Vite (desplegado en Vercel)
- **Backend:** Strapi 5 + TypeScript (desplegado en Render)
- **Facturación:** Factus API v2 (con fallback a v1 en facturas)
- **Base de datos:** SQLite (solo para Strapi)

## Arquitectura

```
Frontend (React/Vite)
    │  POST /api/factus/generar
    │  POST /api/factus/nota-credito
    ▼
Backend (Strapi 5)
    │  OAuth password grant
    │  GET  /v1/numbering-ranges
    │  POST /v2/bills/validate
    │  POST /v2/credit-notes/validate
    │  GET  /v2/.../download-pdf/{numero}
    ▼
Factus (sandbox / producción)
```

El backend actúa como proxy: recibe los datos del comprador y los artículos, construye el payload de Factus, valida el documento y devuelve el PDF en la misma respuesta.

## Requisitos

- Node.js 20 o superior
- Cuenta de Factus (sandbox o producción) con credenciales OAuth
- Rangos de numeración activos para factura y, si se usa, nota crédito

## Configuración

### Backend

```bash
cd backend
npm install
cp .env.example .env
npm run develop
```

Variables principales (ver `backend/.env.example`):

| Variable | Descripción |
| --- | --- |
| `FACTUS_URL` | `https://api-sandbox.factus.com.co` o URL de producción |
| `FACTUS_CLIENT_ID`, `FACTUS_CLIENT_SECRET` | Credenciales OAuth |
| `FACTUS_USERNAME`, `FACTUS_PASSWORD` | Usuario y contraseña de Factus |
| `FACTUS_API_KEY` | Opcional. Si se define, exige header `X-API-Key` |
| `FACTUS_DEBUG` | Opcional. `true` imprime payloads (no usar en producción) |
| `DATABASE_FILENAME` | Ruta de SQLite, por defecto `.tmp/data.db` |

### Frontend

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

| Variable | Descripción |
| --- | --- |
| `VITE_API_URL` | URL del backend, por ejemplo `http://localhost:1337` |
| `VITE_API_TOKEN` | Opcional. Debe coincidir con `FACTUS_API_KEY` |

## Endpoints

### `POST /api/factus/generar`

Genera y valida una factura. Responde con el PDF (`application/pdf`).

```json
{
  "customer": {
    "documentType": "cc",
    "identification": "1023456789",
    "name": "Juan Perez",
    "address": "Calle 123 #45-67",
    "email": "juan@example.com",
    "phone": "3001234567",
    "municipality_code": "11001"
  },
  "paymentMethod": "efectivo",
  "paymentForm": "1",
  "item": [
    { "code": "CUADRO-01", "name": "Cuadro decorativo", "price": 50000, "quantity": 1 }
  ]
}
```

Para NIT agrega `dv`, `company` y `trade_name` si aplica. `paymentForm` `2` (crédito) agrega fecha de vencimiento automática a 30 días.

### `POST /api/factus/nota-credito`

Genera una nota crédito asociada a una factura. Responde con el PDF.

```json
{
  "bill_number": "SETP990002519",
  "correction_concept_code": "2",
  "observation": "Anulación de factura",
  "customer": {
    "documentType": "cc",
    "identification": "1023456789",
    "name": "Juan Perez",
    "address": "Calle 123 #45-67",
    "email": "juan@example.com",
    "phone": "3001234567",
    "municipality_code": "11001"
  },
  "items": [
    { "code": "CUADRO-01", "name": "Cuadro decorativo", "price": 50000, "quantity": 1 }
  ]
}
```

`bill_number` es obligatorio salvo que se envíe `customization_id: "22"`.

## Convención de precios e IVA

- `price` en los items es el **valor unitario final con IVA incluido** (lo que paga el cliente).
- El IVA por defecto es **19%**.
- `payment_details.amount` es la suma de los precios finales con descuento aplicado.
- Si un item trae `taxes`, se usan esas tasas; si no, se aplica 19%.
- En v2 se envía a Factus el precio neto (`price / (1 + IVA)`) más el impuesto; en v1 se envía `price` tal cual porque v1 espera precios brutos. Así la factura y la nota crédito dan el mismo total.

## Rangos de numeración

El backend consulta `GET /v1/numbering-ranges` y selecciona:

- Factura: primer rango cuyo documento contenga “factura”.
- Nota crédito: primer rango cuyo documento contenga “nota” y “crédito”.

Si tu cuenta no tiene el rango correspondiente, la petición falla con un mensaje que lista los rangos disponibles. También puedes enviar `numbering_range_id` explícito en el body.

## Scripts

### Backend

```bash
npm run develop   # Strapi con recarga
npm run start     # Strapi sin recarga
npm run build     # Build del admin
npm test          # Pruebas de payload y totales (Vitest)
```

### Frontend

```bash
npm run dev       # Vite
npm run build     # Build de producción
npm run lint      # ESLint
npm run preview   # Previsualizar build
```

## Pruebas

Las pruebas cubren el cálculo de totales (IVA, descuentos), la construcción de payloads de factura y nota crédito, el mapeo CC/NIT y la selección de rangos de numeración.

```bash
cd backend
npm test
```

## Despliegue

### Backend en Render

Comando de build: `npm ci --include=dev && npm run build`. Comando de inicio: `npm run start`.

`backend/dist` ya no se versiona, así que Render debe compilar en cada despliegue. El comando de build debe instalar también las dependencias de desarrollo (`--include=dev`): TypeScript es necesario para compilar el servidor y las rutas de Strapi.

Configuración recomendada en Render:

| Ajuste | Valor |
| --- | --- |
| Root Directory | `backend` |
| Build Command | `npm ci --include=dev && npm run build` |
| Start Command | `npm run start` |
| Health Check Path | `/_health` |

También puedes crear el servicio desde el archivo `render.yaml` de la raíz del repositorio.

Variables mínimas: las de Factus, `APP_KEYS`, `API_TOKEN_SALT`, `ADMIN_JWT_SECRET`, `TRANSFER_TOKEN_SALT`, `JWT_SECRET` y `DATABASE_FILENAME`.

> SQLite en Render es efímero: si el backend se reinicia, la base de datos se pierde. Para este reto Strapi solo actúa como proxy, así que no afecta la facturación. Para persistencia real usa PostgreSQL.

### Verificar que el backend desplegado está actualizado

El endpoint `GET /api/factus/estado` permite confirmar qué rutas están publicadas:

```bash
curl https://TU-BACKEND.onrender.com/api/factus/estado
```

Debe responder con `ok: true` y listar `POST /api/factus/nota-credito`. Si responde `404` o `405`, la instancia sigue ejecutando un build anterior.

### Error 405 en `/api/factus/nota-credito`

Un `405 Method Not Allowed` en esa ruta no viene de Factus: viene del backend desplegado. La causa es que Render está sirviendo un build viejo que solo registra `/api/factus/generar`. Para corregirlo:

1. Verifica que el Root Directory del servicio sea `backend`.
2. Usa el build command `npm ci --include=dev && npm run build`.
3. Ejecuta un **Manual Deploy → Clear build cache & deploy** en Render.
4. Confirma con `GET /api/factus/estado` y vuelve a probar la nota crédito.

La ruta `POST /api/factus/nota-credito` ya existe en `backend/src/api/factus/routes/factus.ts`; el problema es que la instancia en producción no la tiene cargada.


### Frontend en Vercel

Configura `VITE_API_URL` con la URL pública del backend y, si aplica, `VITE_API_TOKEN`.

No olvides agregar el dominio del frontend a `backend/config/middlewares.ts` para CORS.

## Seguridad

- Las credenciales de Factus viven solo en el backend (`.env`, nunca en el repo).
- Los endpoints son públicos por defecto. Si defines `FACTUS_API_KEY`, debes enviar `X-API-Key`; el frontend lo hace automáticamente con `VITE_API_TOKEN`.
- No uses `FACTUS_DEBUG=true` en producción: imprime datos personales del comprador.

## Estructura

```
reto_factus/
├── backend/
│   ├── config/                 # CORS, server, base de datos
│   └── src/api/factus/         # controlador, rutas, servicio y pruebas
├── frontend/
│   └── src/components/shop.jsx # formulario de factura y nota crédito
└── README.md
```

## Limitaciones conocidas / próximos pasos

- El catálogo de artículos y municipios está fijo en el frontend.
- No hay autenticación de usuarios finales; solo una API key opcional.
- La nota crédito se valida solo contra v2 (sin fallback a v1).
- No se persisten facturas ni notas en la base de datos.
- Falta manejar reintentos y timeouts hacia Factus.
## Descripción general

Este sitio web funciona como una solución al Reto Factus de Halltec.

### Características principales

Esta app web está optimizada para ofrecer una muestra del rápido proceso de la conexión entre Frontend, Backend y API.

- **Diseño:** Adaptado para una interfaz amigable con el usuario.
- **Sección de Formulario:** Datos directos al JSON que se envía a Strapi.

### Tecnologías utilizadas

Para el desarrollo de este proyecto se utilizaron las siguientes herramientas:

* **React:** Estructura semántica del sitio.
* **CSS:** Estilos personalizados.
* **JavaScript:** Interactividad y funcionalidades dinámicas.
* **TypeScript:** Interactividad y funcionalidades dinámicas.
* **Strapi:** Procesamiento de datos y conexión con la API.
