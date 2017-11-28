const hapi = require('hapi');
const server = new hapi.Server();
const route = require('./route/createServer')

server.connection({ port: 3008, host: 'localhost' });

route.createServer(server);

server.start((err) => {
    if (err) console.log(err);
    else console.log('server start YO!');
});
