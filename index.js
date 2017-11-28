const authentication = require('./authentication');

const Hapi = require('hapi');

const server = new Hapi.Server();
const host = 'localhost';
const port = 3008;
server.connection({port: port, host: host});

server.route({
  method: 'GET',
  path: '/auth',
  handler: authentication.getAuthHandler
});

server.start(() => {
  console.log('Server started with port', port);
});
