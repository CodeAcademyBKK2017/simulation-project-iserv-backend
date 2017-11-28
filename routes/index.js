const route_authapi = require('./route_authapi');
const route_packageapi = require('./route_packageapi');
const route_userdataapi = require('./route_userdataapi');

RegisterAllRoutes = (server) => {
    server.route(route_authapi);
    server.route(route_packageapi);
    server.route(route_userdataapi);
}

module.exports = RegisterAllRoutes