const hapi = require('hapi');
const registerAllRoutes = require('./routes'); // index.js

const server = new hapi.Server();
server.connection({port: 3000, host: 'localhost'});

registerAllRoutes(server);

server.start((err) => {
  console.log('Server start: running at', server.info.uri);
});