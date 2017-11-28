const PackageAPI = require('../src/packageapi');
const Boom = require('boom');
const Joi = require('joi');
const JoiSchema = require('../joiSchema/package');

module.exports = {
    method: 'POST',
    path: '/packages',
    config: {
        validate: {
            headers: JoiSchema.requestSchema
                // Joi -> Type -> Regex -> Min -> Max -> Required
        },
        response: {
            schema: JoiSchema.responseSchema
        }
    },
    handler: (request, response) => {
        if (request.headers) {
            if (request.headers.secret) {
                return PackageAPI(request.headers.secret).then(([PrepaidData, PostpaidData]) => {
                    if (PrepaidData.statusCode) {
                        return response(Boom.badRequest(PrepaidData.error.err));
                    } else {
                        if (PostpaidData.statusCode) {
                            return response(Boom.badRequest(PostpaidData.error.err));
                        } else {
                            return response({
                                prepaid: PrepaidData,
                                postpaid: PostpaidData
                            });
                        }
                    }
                }).catch((err) => { return response(Boom.badGateway(err.error)); });
            } else {
                return response(Boom.badRequest('Missing Secret Parameter'));
            }
        } else {
            return response(Boom.badRequest('Missing Secret Parameter'));
        }
    }
}