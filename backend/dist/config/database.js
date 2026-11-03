"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    connection: {
        client: 'sqlite',
        connection: {
            filename: process.env.DATABASE_FILENAME || ':memory:',
        },
        useNullAsDefault: true,
    },
});
