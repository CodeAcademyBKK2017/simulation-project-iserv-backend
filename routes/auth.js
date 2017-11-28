const lib = require('../src/lib');
module.exports = [{
  method: 'GET',
  path: '/auth',
  handler: (request, reply) => {
    lib.auth(request.query.user).then((data) => {
      reply(data).code(data.code);
    });
  }
}];