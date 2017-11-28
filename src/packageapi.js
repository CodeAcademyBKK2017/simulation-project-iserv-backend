const PackageServices = require('../services/package_services');

const PackageAPI = (secret) => {
    return Promise.all([PackageServices.GetPrePaid(secret), PackageServices.GetPostPaid(secret)]);
}

module.exports = PackageAPI