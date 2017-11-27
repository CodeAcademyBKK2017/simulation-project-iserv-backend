const lib = require('./lib');
module.exports = {
  'auth': {
    method: 'GET',
    path: '/auth',
    handler: (request, reply) => {
      // reply(lib.auth(request.query.user));
      const responseAuth = lib.auth(request.query.user);
      responseAuth.then((data) => {
        reply(data).code(data.code);
      });
    }
  }
};