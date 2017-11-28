const user = require('../')
const Boom = require('boom')

module.exports = {
    method: 'POST',
    path: '/userdata',
    handler: (request, reply) => {
        const responseFunction = (body)=>{
            //console.log('body:', body);
            reply(body)
        }
        
        const req = request.query.user;
        if(req && req < 3)  Boom.badRequest('invalid query');
        user.getUserData(req, responseFunction);
    },
}