const login = require('./login');
const packages = require('./packages');

module.exports = (server) => {
  server.route(login);
  server.route(packages);
};