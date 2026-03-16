"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    'strapi::errors',
    'strapi::logger',
    'strapi::query',
    'strapi::body',
    {
        name: 'strapi::cors',
        config: {
            origin: [
                'http://localhost:5173',
                process.env.FRONTEND_URL || '', //ajuste para deploy en Vercel
            ].filter(Boolean),
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
