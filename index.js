const Hapi = require('hapi');
const rp = require('request-promise');
const route = require('./routes/router');
const server = new Hapi.Server();
server.connection({port: 3008,host: 'localhost'});
route.router(server);
server.start(() => {
  //   if (err) {
  //     throw err;
  //   }
  console.log(`Server running at: ${server.info.uri}`);
});