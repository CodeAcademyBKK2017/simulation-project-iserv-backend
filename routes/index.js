const authRoute = require('./auth');
const packagesRoute = require('./packages');
const userRoute = require('./user');
module.exports = (server) => {
  // [authRoute, packagesRoute, userRoute].forEach(function (routeItem) {
  //   server.route(routeItem);
  // });
  server.route(authRoute[0]);
  server.route(packagesRoute[0]);
  server.route(userRoute[0]);
};
