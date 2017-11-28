const lib = require('../src/lib');
const Boom = require('boom');
const Joi = require('joi');
const joiSchemaPackages = require('../joiSchema/packages');
module.exports = [{
  method: 'POST',
  path: '/packages',
  config: {
    validate: joiSchemaPackages.validateSchema
  },
  handler: (request, reply) => {
    const secret = request.payload.secret;
    // if (!(secret && secret.length >= 3)) {
    //   return reply(Boom.badRequest('Invalid secret'));
    // }
    lib.packages(secret).then((data) => reply(data).code(data.code));
  }
}];