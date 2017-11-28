const srcAuth = require('../src/authentication');

// ----------

const VALIDATE_USERNAME_FAIL = 'VALIDATE_USERNAME_FAIL';

// ----------

const getAuth = {
  method: 'GET',
  path: '/auth',
  handler: (request, reply) => {
    // input
    const {username} = request.query;

    // validate input
    const isString = (typeof (username) === 'string');
    const isNotEmpty = (username.length > 0);
    const isContainOnlyNumber = username.match(/^[0-9]+$/);

    if (isString && isNotEmpty && !isContainOnlyNumber) {
      // request service then reply at once
      srcAuth.requestAuth(username).
        then((data) => {
          reply(data);
        }).catch((err) => {
          reply(err);
        });
    } else {
      reply(VALIDATE_USERNAME_FAIL);
    }
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
