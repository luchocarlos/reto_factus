module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/factus/estado',
            handler: 'factus.estado',
            config: {
                auth: false,
                policies: [],
                middlewares: []
            }
        },
        {
            method: 'POST', // metodo de consulta a la api
            path: '/factus/generar', // endpoint de acceso POST
            handler: 'factus.generarYDescargar', // medoto
            config: {
                auth: false, // publico
                policies: [], // Sin validaciones adicionales
                middlewares: [] // Sin pre-procesadores
            }
        },
        {
            method: 'POST',
            path: '/factus/nota-credito',
            handler: 'factus.generarNotaCredito',
            config: {
                auth: false,
                policies: [],
                middlewares: []
            }
        }
    ]
};
