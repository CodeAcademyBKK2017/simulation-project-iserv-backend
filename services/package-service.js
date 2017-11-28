const http = require('./http');

const getAllPackages = (token) => Promise.all([getPrepaidPackageData(token),getPostpaidPackageData(token)]);

const getPrepaidPackageData = (token) => http.get('/prepaid', {headers: {'secret': token}});

const getPostpaidPackageData = (token) => http.post('/postpaid', {body: {secret: token}});

module.exports = {
  getAllPackages
};

