const authentication = require('./authentication');
const packages = require('./packages');

// ----------

const registerAllRoutes = (server) => {
  server.route(authentication.getAuth);
  server.route(packages.postPackages);
};

// ----------

module.exports = {
  registerAllRoutes
};