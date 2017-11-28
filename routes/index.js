const authRoute = require('./auth');
const packagesRoute = require('./packages');
module.exports = (server) => {
  const allRoute = authRoute.concat(packagesRoute);
  allRoute.forEach(function (routeItem) {
    server.route(routeItem);
  });
};
