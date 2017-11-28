const packages = require('../src/packages.js');
const Boom = require('boom');
const joiSchema = require('../joiSchema/packages');

module.exports = { 
  method: 'POST', 
  path: '/packages', 
  config: {
    validate: {
      headers: joiSchema.headerSchema
    },
    response: {
      schema: joiSchema.responseSchema
    }
  },
  handler: (request, reply) => {
    packages(request.headers.token).then((data) => {
      reply(data);
    }).catch((err) => {
      reply(Boom.badRequest(err.message));
    });
  }
};