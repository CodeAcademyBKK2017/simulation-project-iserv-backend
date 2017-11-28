const authRoute = require('./authRoute');
const packageRoute = require('./packagesRoute');
const registerAllRoutes = (server)=>{
    server.route(authRoute);
    server.route(packageRoute);
}
module.exports = registerAllRoutes;