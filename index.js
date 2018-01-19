const routes = require('./routes');

const Hapi = require('hapi');

// ----------

const server = new Hapi.Server();
const host = 'localhost';
const port = 3008;
server.connection({port: port, host: host});

routes.registerAllRoutes(server);

server.start(() => {
  console.log('Server started with port', port);
});
