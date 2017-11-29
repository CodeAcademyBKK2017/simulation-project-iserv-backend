const login = require('./login');
const packages = require('./packages');
const userdata = require('./userdata');

module.exports = (server) => {
  server.route(login);
  server.route(packages);
  server.route(userdata);
};