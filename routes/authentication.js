const Boom = require('Boom');

// ----------

const srcAuth = require('../src/authentication');
const joiSchema = require('../joiSchema/authentication');

// ----------

const VALIDATE_USERNAME_FAIL = 'VALIDATE_USERNAME_FAIL';

// ----------

const getAuth = {
  method: 'GET',
  path: '/auth',
  config: {
    validate: joiSchema.requestSchema,
    response: joiSchema.responseSchema
  },
  handler: (request, reply) => {
    // input
    const {username} = request.query;

    // request service then reply at once
    srcAuth.requestAuth(username).
      then((data) => {
        reply(data);
      }).catch((err) => {
        reply(Boom.badRequest(err));
      });
  }
};

// ----------

// single export
// module.exports = getAuth;

// array export (easy to register without human readable, because machine read it)
// module.exports = [
//   getAuth
// ];

// object export (human readable but manual add it or loop with key)
module.exports = {
  getAuth
};
