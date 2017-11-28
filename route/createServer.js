const auth = require('./auth');
const packages = require('./packages');

const createServer = (server) => {
    server.route(auth);
    server.route(packages);
}

module.exports = {
    createServer:createServer
};