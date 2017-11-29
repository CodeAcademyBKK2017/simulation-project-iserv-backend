const authRoute = require('./authRoute');
const packageRoute = require('./packagesRoute');
const userdataRoute = require('./userdataRoute');
const registerAllRoutes = (server)=>{
    server.route(authRoute);
    server.route(packageRoute);
    server.route(userdataRoute);
}
module.exports = registerAllRoutes;