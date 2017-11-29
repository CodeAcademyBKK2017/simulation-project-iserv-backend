const userdata = require('../src/userdata');
const Boom = require('boom');
const joiSchema = require('../joiSchema/userdata');

module.exports = {
  method: 'GET',
  path: '/userdata',
  config: {
    validate: {
      query: joiSchema.requestSchema,
      headers: joiSchema.headerSchema
    },
    response: {
      schema: joiSchema.responseSchema
    }
  },
  handler: (request, reply) => {
    userdata(request.headers.token, request.query.part).then((data) => {
      reply(data);
    }).catch((err) => {
      reply(Boom.badRequest(err.message));
    });
  }
};