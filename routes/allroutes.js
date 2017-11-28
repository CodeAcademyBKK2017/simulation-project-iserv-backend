auth = require('./auth');
prepost = require('./prepost');

const RequestAllRoutes = (server)=>{
    try {
        server.route(auth);
        server.route(prepost);
        return "success"; 
    } catch (error) {
        return error;
    }
    
}
module.exports = {RequestAllRoutes:RequestAllRoutes}