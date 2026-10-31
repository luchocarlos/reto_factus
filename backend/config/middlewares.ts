export default [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: false,
      crossOriginEmbedderPolicy: false,
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: [
        'http://localhost:5173',
        'https://reto-factus-six.vercel.app',
      ],
      headers: ['Content-Type', 'Authorization', 'X-API-Key'],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      keepHeaderOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];