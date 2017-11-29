const auth = require('./auth');
const packages = require('./packages');
const userdata = require('./userdata');
const router = (server)=>{
    server.route(auth);
    server.route(packages);
    server.route(userdata);
}
module.exports = {
    router:router
}