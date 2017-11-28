const lib = require('../src/lib');
module.exports = [{
  method: 'POST',
  path: '/packages',
  handler: (request, reply) => {
    const payloadJson = JSON.parse(request.payload);
    lib.packages(payloadJson.secret).then((data) => {
      reply(data).code(data.code);
    });
  }
}];