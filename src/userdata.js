const userService = require('../services/users-service');

module.exports = (token,part) => 
  userService.getUserData(token).then((userData) => {
    const output = {};
    output[part] = userData[part];
    return output;
  }).catch((err) => {
    throw (new Error(err.error.err)); 
  });