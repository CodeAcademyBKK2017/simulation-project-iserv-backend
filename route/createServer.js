const auth = require('./auth');
const packages = require('./packages');
const userdata = require('./userdata');

const createServer = (server) => {
    server.route(auth);
    server.route(packages);
    server.route(userdata);
}

module.exports = {
    createServer:createServer
};