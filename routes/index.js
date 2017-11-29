const authentication = require('./authentication');
const packages = require('./packages');
const userData = require('./userData');

// ----------

const registerAllRoutes = (server) => {
  server.route(authentication.getAuth);
  server.route(packages.postPackages);
  server.route(userData.getUserData);
};

// ----------

module.exports = {
  registerAllRoutes
};