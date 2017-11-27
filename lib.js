const rp = require('request-promise');

const auth = (user) => rp({
  method: 'POST',
  uri: 'https://code-academy-backend.herokuapp.com/login',
  body: {
    user: user
  },
  json: true
}).
  then(function (data) {
    return {
      'code': 200,
      'token': data
    };
  }).
  catch(function (err) {
    return {
      'code': parseInt(err.statusCode),
      'error': err.error.err
    };
  });

// auth('bob');

module.exports = {
  auth: auth
};