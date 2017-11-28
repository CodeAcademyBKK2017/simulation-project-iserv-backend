const Hapi = require('hapi');
const registerAllRoutes = require('./routes');

const server = new Hapi.Server();

server.connection({port: 8080, host: 'localhost'});
registerAllRoutes(server);
server.start((err) => {
  if (err) {
    throw err;
  }

  server.log(`Server running at: ${server.info.url}`);
});