const login = require('../src/login');
const Boom = require('boom');
const joiSchema = require('../joiSchema/c');

module.exports = {
  method: 'POST',
  path: '/auth',
  config: {
    validate: {
      payload: joiSchema.requestSchema
    },
    response: {
      schema: joiSchema.responseSchema
    }
  },
  handler: (request, reply) => {
    login(request.payload.username).then((data) => {
      reply(data);
    }).catch((err) => {
      reply(Boom.badRequest(err.message));
    });
  }
};