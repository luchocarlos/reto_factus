"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    connection: {
        client: 'sqlite',
        connection: {
            filename: ':memory:',
        },
        useNullAsDefault: true,
    },
});
