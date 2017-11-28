const hapi = require('hapi');

const route = require('./route');

const server = new hapi.Server();
server.connection({port: 3000, host: 'localhost'});

server.route(route.auth);
server.route(route.packages);

server.start(() => {
  console.log('Server start: running at', server.info.uri);
});