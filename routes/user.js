const lib = require('../src/lib');
const Boom = require('boom');
const Joi = require('joi');
const joiSchemaUser = require('../joiSchema/user');
module.exports = [{
  method: 'POST',
  path: '/user',
  config: {
    validate: joiSchemaUser.validateSchema
  },
  handler: (request, reply) => {
    const secret = request.payload.secret;
    lib.user(secret).then((data) => reply(data).code(data.code));
  }
}];