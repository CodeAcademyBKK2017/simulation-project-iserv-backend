const auth = require('./auth');
const packages = require('./packages');
const router = (server)=>{
    server.route(auth);
    server.route(packages);
}
module.exports = {
    router:router
}