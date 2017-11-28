const hapi = require('hapi');
const server = new hapi.Server();
const RegistryRoutes = require('./routes/allroutes')
server.connection({ port: 3008, host: 'localhost' })
RegistryRoutes.RequestAllRoutes(server);
server.start((err) => {
    if(err) console.log(err);
    console.log('server start YO!')
})