const hapi = require('hapi');
const server = new hapi.Server();
server.connection({ port: 3000, host: 'localhost' });

const RegisterAllRoutes = require('./routes');

RegisterAllRoutes(server);

server.start(() => {
    console.log('Server started. Yay!');
});