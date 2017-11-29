const auth = require ('./auth');
const packages = require('./packages');
const userdata = require('./userdata');
module.exports = (server)=>{
    server.route(auth)
    server.route(packages)
    server.route(userdata)
}