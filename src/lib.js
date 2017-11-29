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

const packages = (secret) => Promise.all([packagesPrepaid(secret), packagesPostpaid(secret)]).then(([responsePackagesPrepaid, responsePackagesPostpaid]) => ({
  'code': 200,
  'prepaid': responsePackagesPrepaid.data,
  'postpaid': responsePackagesPostpaid.data
}));

const packagesPrepaid = (secret) => rp({
  method: 'GET',
  uri: 'https://code-academy-backend.herokuapp.com/prepaid',
  headers: {
    secret: secret
  },
  json: true
}).
  then(function (data) {
    return {
      'code': 200,
      'data': data
    };
  }).
  catch(function (err) {
    return {
      'code': parseInt(err.statusCode),
      'error': err.error.err
    };
  });

const packagesPostpaid = (secret) => rp({
  method: 'POST',
  uri: 'https://code-academy-backend.herokuapp.com/postpaid',
  body: {
    secret: secret
  },
  json: true
}).
  then(function (data) {
    return {
      'code': 200,
      'data': data
    };
  }).
  catch(function (err) {
    return {
      'code': parseInt(err.statusCode),
      'error': err.error.err
    };
  });

const userData = (secret) => Promise.all([packagesPrepaid(secret), packagesPostpaid(secret)]).then(([responsePackagesPrepaid, responsePackagesPostpaid]) => {
  const userDataKey = responsePackagesPostpaid.data.userDataKey.toString() + responsePackagesPrepaid.data.userDataKey.toString();
  return user(userDataKey);
}).catch(function (err) {
  return {
    'code': 400,
    'error': 'ERROR'
  };
});

const user = (userDataKey) => rp({
  method: 'POST',
  uri: 'https://code-academy-backend.herokuapp.com/user',
  headers: {
    secret: userDataKey
  },
  json: true
}).
  then(function (data) {
    return {
      'code': 200,
      'data': data
    };
  }).
  catch(function (err) {
    return {
      'code': parseInt(err.statusCode),
      'error': err.error.err
    };
  });

module.exports = {
  auth: auth,
  packages: packages,
  user: userData
};