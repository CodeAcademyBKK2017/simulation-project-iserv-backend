const userService = require('../services/users-service');

module.exports = (username) =>
  userService.login(username).then((response) => {
    const output = {token: response};
    return output;
  }).catch((err) => {
    throw (new Error(err.error.err));
  });