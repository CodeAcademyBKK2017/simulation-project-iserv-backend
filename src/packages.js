const rp = require('request-promise');

// ----------

const WRONG_TOKEN = 'WRONG_TOKEN';

const API_PREPAID = 'https://code-academy-backend.herokuapp.com/prepaid';
const API_POSTPAID = 'https://code-academy-backend.herokuapp.com/postpaid';

// ----------

const requestAllPackages = (token) => {
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

  return Promise.all([prepaidPromise, postpaidPromise]).
    then(([prepaidData, postpaidData]) => {
      const result = {
        prepaid: prepaidData,
        postpaid: postpaidData
      };
      return result;
    }).catch((err) => {
      // throw err.message;
      throw WRONG_TOKEN;
    });
};

// ----------

module.exports = {
  requestAllPackages,
  WRONG_TOKEN
};
