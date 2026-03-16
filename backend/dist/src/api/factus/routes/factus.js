module.exports = {
    routes: [
        {
            method: 'POST', // metodo de consulta a la api
            path: '/factus/generar', // endpoint de acceso POST
            handler: 'factus.generarYDescargar', // medoto
            config: {
                auth: false, // publico
                policies: [], // Sin validaciones adicionales
                middlewares: [] // Sin pre-procesadores
            }
        }
    ]
};
