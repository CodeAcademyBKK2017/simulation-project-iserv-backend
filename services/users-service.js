const http = require('./http');

const login = (username) => http.post('/login', {body: {user: username}});

module.exports = {
  login
};

