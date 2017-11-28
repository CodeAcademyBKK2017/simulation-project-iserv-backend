const AuthAPI = require('../src/authapi');
const Boom = require('boom');
const Joi = require('joi');
const JoiSchema = require('../joiSchema/auth');

module.exports = {
    method: 'GET',
    path: '/auth',
    config: {
        validate: {
            query: JoiSchema.requestSchema
        },
        response: {
            schema: JoiSchema.responseSchema
        }
    },
    handler: (request, response) => {
        if (request.query.user) {
            return AuthAPI(request.query.user).then((user) => {
                if (user.statusCode) {
                    return response(Boom.badRequest(user.error.err));
                    // return response({ err: user.error.err }).statusCode(user.statusCode);
                } else {
                    return response({ token: user });
                }

            }).catch((err) => { return response(Boom.badGateway(err.error)); });
        } else {
            return response(Boom.badRequest('Missing User Parameter'));
            // return response({ error: 'Missing User Parameter' });
        }
    }
}