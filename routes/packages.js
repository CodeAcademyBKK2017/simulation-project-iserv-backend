const Boom = require('Boom');
const Joi = require('joi');

// ----------

const srcPackages = require('../src/packages');
const joiSchema = require('../joiSchema/packages');

// ----------

// const VALIDATE_TOKEN_FAIL = 'VALIDATE_TOKEN_FAIL';

// ----------

const postPackages = {
  method: 'POST',
  path: '/packages',
  config: {
    validate: joiSchema.requestSchema,
    response: joiSchema.responseSchema
  },
  handler: (request, reply) => {
    // input
    const token = request.payload.token;// body param
    // const token = request.headers.token;// header param
    
    // request service then reply at once
    srcPackages.requestAllPackages(token).
      then((data) => {
        reply(data);
      }).catch((err) => {
        reply(Boom.unauthorized(err));
      });
  }
};

// ----------

module.exports = {
  postPackages
};
