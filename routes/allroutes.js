const auth = require ('./auth');
const packages = require('./packages');
const userdata = require('./userdata');
const   registry = (server)=>{
    server.route(auth);
    server.route(packages);
    server.route(userdata);
}
module.exports = {registry:registry}