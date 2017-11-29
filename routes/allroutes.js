const auth = require('./auth');
const prepost = require('./prepost');
const userdata = require('./userdata');

const RequestAllRoutes = (server)=>{
    try {
        server.route(auth);
        server.route(prepost);
        server.route(userdata);
        return "success"; 
    } catch (error) {
        return error;
    }
    
}
module.exports = {RequestAllRoutes:RequestAllRoutes}