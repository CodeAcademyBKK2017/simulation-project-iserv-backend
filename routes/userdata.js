const user = require('../src/getUserData')
const Boom = require('boom')

module.exports = {
    method: 'GET',
    path: '/userdata',
    handler: (request, reply) => {
        const responseFunction = (body)=>{
            //console.log('body:', body);
            reply(body)
        }
        const req = request.query.parth;
        const userreq = request.query.user;
        if(!userreq && !req && ((req !== 'age')|| (req !== 'name')|| (req !== 'phone')))  Boom.badRequest('invalid query');
        user.getUserData(req,userreq, responseFunction);
    },
}