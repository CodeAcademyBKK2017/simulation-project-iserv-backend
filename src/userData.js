const rp = require('request-promise');

// ----------

const srcPackages = require('./packages');

// ----------

const WRONG_TOKEN = 'WRONG_TOKEN';
const NOT_FOUND_PART = 'NOT_FOUND_PART';

const API_USER_DATA = 'https://code-academy-backend.herokuapp.com/user';

// ----------

const requestUserData = (token, part) => {
  const allPackagesPromise = srcPackages.requestAllPackages(token);
  return allPackagesPromise.
    then((data) => `${data.postpaid.userDataKey}${data.prepaid.userDataKey}`).
    then((secret) => {
	    const options = {
        method: 'POST',
        uri: API_USER_DATA,
        headers: {
		      secret
        },
        json: true
	    };
      return rp(options);
    }).
    then((data) => ({
      [part]: data[part]
    })).
    catch((err) => {
      throw WRONG_TOKEN;
    });
};

// ----------

module.exports = {
  requestUserData,
  WRONG_TOKEN,
  NOT_FOUND_PART
};
