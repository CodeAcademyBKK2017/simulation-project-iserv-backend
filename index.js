// const allroutes = require ('./routes/allroutes');
const Hapi = require('hapi');
const register = require ('./routes');
const server = new Hapi.Server();
server.connection({port: 3008,host: 'localhost'});
// allroutes.registry(server)
register(server)

server.start(() => {
   //   if (err) {
   //     throw err;
   //   }
   console.log(`Server running at: ${server.info.uri}`);
});