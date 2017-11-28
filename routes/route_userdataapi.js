const UserDataAPI = require('../src/userdataapi');
const Boom = require('boom');
const Joi = require('joi');
const JoiSchema = require('../joiSchema/userdata');

module.exports = {
    method: 'GET',
    path: '/userdata',
    config: {
        validate: {
            headers: JoiSchema.requestSchema
        },
        response: {
            schema: JoiSchema.responseSchema
        }
    },
    handler: (request, response) => {
        if (request.headers) {
            if (request.headers.secret) {
                return UserDataAPI(request.headers.secret).then((result) => {
                    return response(result);

                }).catch((err) => { return response(Boom.badGateway(err.error.err)); });
            } else {
                return response(Boom.badRequest('Missing Secret Parameter'));
            }
        } else {
            return response(Boom.badRequest('Missing Secret Parameter'));
        }
    }
}