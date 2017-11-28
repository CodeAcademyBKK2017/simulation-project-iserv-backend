const authRoute = require('./auth');
const packagesRoute = require('./packages');
module.exports = (server) => {
//   server.route(authRoute[0]);
//   server.route(packagesRoute[0]);
  [authRoute, packagesRoute].forEach(function (routeItem) {
    server.route(routeItem);
  });
};
