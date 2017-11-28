const rp = require('request-promise');

const NOT_FOUND_USERNAME = 'NOT_FOUND_USERNAME';

const API_LOGIN = 'https://code-academy-backend.herokuapp.com/login';

// ----------

const requestAuth = (username) => {
  // make request to backend
  var options = {
    method: 'POST',
    uri: API_LOGIN,
    body: {
      user: `${username}`
    },
    json: true
  };

  return rp(options).
    then((token) => ({token})).
    catch((err) => {
      // throw err.message;
      throw NOT_FOUND_USERNAME;
    });
};

// ----------

module.exports = {
  requestAuth
};
