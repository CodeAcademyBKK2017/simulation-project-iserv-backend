const userdata = require('../src/userdata');
const Boom = require('Boom');
const joiSchemaPackages = require('../joiSchema/userdata');

module.exports = {
    method: 'GET',
    path: '/userdata',
    // config:{
    //     validate: { payload: joiSchemaPackages.requestSchema },
    //     response: { schema: joiSchemaPackages.responseSchema }
    // },
    handler: (request, reply) => {
        const part = request.query.part;
        const token = request.headers.token;
        userdata.getUserData(token).then(res => {
            if (res.hasOwnProperty(part)){
                const response = {};
                response[part] = res[part];
                reply(response);
            } else {
                reply(Boom.badRequest(`Not have a ${part}!!!`)).code(400);    
            }
        }).catch(err => {
            console.log(err);
            reply(Boom.badRequest(`Token is not match!!!`)).code(400);
        })
    }
};