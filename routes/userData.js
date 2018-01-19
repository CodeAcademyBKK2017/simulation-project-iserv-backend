const Boom = require('Boom');

// ----------

const srcUserData = require('../src/userData');
const joiSchema = require('../joiSchema/userData');

// ----------

const VALIDATE_PART_FAIL = 'VALIDATE_PART_FAIL';

// ----------

const getUserData = {
  method: 'GET',
  path: '/userdata',
  config: {
    validate: joiSchema.requestSchema,
    response: joiSchema.responseSchema
  },
  handler: (request, reply) => {
    // input
    const {part} = request.query;
    const {token} = request.headers;
    
    // request service then reply at once
    srcUserData.requestUserData(token, part).
      then((data) => {
        reply(data);
      }).catch((err) => {
        reply(Boom.badRequest(err));
      });
  }
};

// ----------

module.exports = {
  getUserData
};
