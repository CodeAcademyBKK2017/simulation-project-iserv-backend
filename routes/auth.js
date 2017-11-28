const lib = require('../src/lib');
const Boom = require('boom');
const Joi = require('joi');
const joiSchemaAuth = require('../joiSchema/auth');
module.exports = [{
  method: 'GET',
  path: '/auth',
  config: {
    validate: joiSchemaAuth.validateSchema,
    response: joiSchemaAuth.responseSchema
  },
  handler: (request, reply) => {
    const user = request.query.user;
    // if (!(user && user.length >= 3)) {
    //   return reply(Boom.badRequest('Invalid user'));
    // }
    lib.auth(user).then((data) => reply(data).code(data.code));
  }
}];