const rp = require('request-promise');
const Joi = require('joi');

const VALIDATE_USERNAME_FAIL = 'VALIDATE_USERNAME_FAIL';
const NOT_FOUND_USERNAME = 'NOT_FOUND_USERNAME';

// ----------

const getAuthHandler = (request, reply) => {
  const {username} = request.query;

  // validate
  const isString = (typeof (username) === 'string');
  const isNotEmpty = (username.length > 0);
  const isContainOnlyNumber = username.match(/^[0-9]+$/);
  if (isString && isNotEmpty && !isContainOnlyNumber) {
    // make request to backend
    var options = {
      method: 'POST',
      uri: 'https://code-academy-backend.herokuapp.com/login',
      body: {
        user: `${username}`
      },
      json: true // Automatically stringifies the body to JSON
    };

    rp(options).
      then((parsedBody) => {
        reply({token: parsedBody});
      }).
      catch((err) => {
        reply(NOT_FOUND_USERNAME).code(400);
      });
  } else {
    reply(VALIDATE_USERNAME_FAIL).code(400);
  }

  // -----
  
  // const schema = Joi.object().keys({
  //   username: Joi.string().regex(/^[a-zA-Z]+$/)
  // }).with('username');

  // // Return result.
  // const result = Joi.validate({username: 'abc', birthyear: 1994}, schema);

  // -----
};

// ----------

module.exports = {
  getAuthHandler
};
