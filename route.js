const lib = require('./lib');
module.exports = {
  'auth': {
    method: 'GET',
    path: '/auth',
    handler: (request, reply) => {
      // reply(lib.auth(request.query.user));
      lib.auth(request.query.user).then((data) => {
        reply(data).code(data.code);
      });
    }
  },
  'packages': {
    method: 'POST',
    path: '/packages',
    handler: (request, reply) => {
      const payloadJson = JSON.parse(request.payload); 
      lib.packages(payloadJson.secret).then((data) => {
        reply(data).code(data.code);
      });
    }
  }
};