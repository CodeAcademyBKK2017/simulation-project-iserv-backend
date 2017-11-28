const packageService = require('../services/package-service');

module.exports = (token) => 
  packageService.getAllPackages(token).then(([prepaidData, postpaidData]) => {
    const output = {prepaid: prepaidData,postpaid: postpaidData};
    return output;
  }).catch((err) => {
    throw (new Error(err.error.err)); 
  });