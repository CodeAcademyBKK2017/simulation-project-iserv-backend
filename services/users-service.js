const http = require('./http');
const packageService = require('./package-service');

const login = (username) => http.post('/login', {body: {user: username}});

const getUserData = (token) => packageService.getAllPackages(token).
  then(([prepaidData, postpaidData]) => (postpaidData.userDataKey + prepaidData.userDataKey)).
  then((secret) => http.post('/user', {headers: {'secret': secret}}));

module.exports = {
  login,
  getUserData
};

