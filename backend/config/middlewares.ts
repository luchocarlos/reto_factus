export default [
  'strapi::errors',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'http://localhost:5173',
        'https://reto-factus-six.vercel.app',
      ],
      headers: ['Content-Type', 'Authorization'],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    },
  },
  'strapi::poweredBy',
  'strapi::session',
  'strapi::favicon',
  'strapi::security',
  'strapi::public',
];