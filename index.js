const Hapi = require('hapi');
const registerAllRoutes = require('./routes');
const server = new Hapi.Server();

server.connection({port: 3008
    , host: 'localhost'
});
registerAllRoutes(server);

server.start((err) => {
if(err){
    throw err;
}
      console.log(`Server running at: ${server.info.uri}`);
});
    
module.exports = server;