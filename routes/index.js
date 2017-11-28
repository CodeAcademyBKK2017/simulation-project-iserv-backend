const auth = require ('./auth');
const packages = require('./packages');
module.exports = (server)=>{
    server.route(auth)
    server.route(packages)
}