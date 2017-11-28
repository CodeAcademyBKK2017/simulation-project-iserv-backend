const rp = require('request-promise');

const VALIDATE_TOKEN_FAIL = 'VALIDATE_TOKEN_FAIL';
const WRONG_TOKEN = 'WRONG_TOKEN';

const API_PREPAID = 'https://code-academy-backend.herokuapp.com/prepaid';
const API_POSTPAID = 'https://code-academy-backend.herokuapp.com/postpaid';

// ----------

const getPackagesHandler = (request, reply) => {
  const token = request.payload.token;// body param
  // const token = request.headers.token;// header param

  // -----

  var prepaidOptions = {
    method: 'GET',
    uri: API_PREPAID,
    headers: {
      'secret': `${token}`
    },
    json: true
  };
  const prepaidPromise = rp(prepaidOptions);

  // -----

  var postpaidOptions = {
    method: 'POST',
    uri: API_POSTPAID,
    body: {
      secret: `${token}`
    },
    json: true
  };
  const postpaidPromise = rp(postpaidOptions);
  
  // -----

  Promise.all([prepaidPromise, postpaidPromise]).
    then(([prepaidData, postpaidData]) => {
      reply({prepaid: prepaidData, postpaid: postpaidData});
    }).catch((err) => {
      reply(err.message).code(400);
    });
};

// ----------

module.exports = {
  getPackagesHandler
};
