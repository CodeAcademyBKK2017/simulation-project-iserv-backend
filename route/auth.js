const login = require('../src/login');
const Boom = require('Boom');
const joiSchemaAuth = require('../joiSchema/auth');

module.exports = {
    method: 'GET',
    path: '/auth',
    config:{
        validate: { query: joiSchemaAuth.requestSchema },
        response: { schema: joiSchemaAuth.responseSchema }
    },
    handler: (request, reply) => {
        const userName = request.query.user;
        
        if(userName.lengthb < 3){
            reply(Boom.badRequest('Please check user.'));
        }

        login.getToken(userName).then(token => {
            const response = { token : `${token}` };
            reply(response);
        }).catch(err => {
            reply(Boom.badRequest('User is not found!!!'));
        })
    }
};