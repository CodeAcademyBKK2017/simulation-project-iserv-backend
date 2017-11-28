const auth = require ('./auth');
const packages = require('./packages');
const   registry = (server)=>{
    server.route(auth);
    server.route(packages);
}
module.exports = {registry:registry}