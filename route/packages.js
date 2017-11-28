const packages = require('../src/packages');
const Boom = require('Boom');
const joiSchemaPackages = require('../joiSchema/packages');

module.exports = {
    method: 'POST',
    path: '/packages',
    config:{
        validate: { payload: joiSchemaPackages.requestSchema },
        response: { schema: joiSchemaPackages.responseSchema }
    },
    handler: (request, reply) => {
        const token = request.payload.secret;
        console.log(token);
        packages.postPrepaidPostpaid(token).then(res => {
            reply(res);
        }).catch(err => {
            reply(Boom.badRequest('Token is not match!!!')).code(400);
        })
    }
};