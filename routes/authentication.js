const Boom = require('Boom');
const Joi = require('joi');

// ----------

const srcAuth = require('../src/authentication');

// ----------

const VALIDATE_USERNAME_FAIL = 'VALIDATE_USERNAME_FAIL';

// ----------

const getAuth = {
  method: 'GET',
  path: '/auth',
  config: {
    validate: {
      // params: {},
      query: {
        username: Joi.string().alphanum().min(1).max(10).required()
      }
      // headers: {},
      // payload: {},
    },
    response: {
      schema: Joi.object().keys({
        token: Joi.string().token().required()
      })
    }
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
