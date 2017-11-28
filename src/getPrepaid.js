const rp = require('request-promise');
const urlPrepaid = 'https://code-academy-backend.herokuapp.com/prepaid';

const getPrepaid = (token) => {
    return  rp.get({url:urlPrepaid, headers: { secret: `${token}` }, json:true}, (err,httpResponse,body) => body)
            .then((resPrepaid) => resPrepaid)
}

module.exports = {
    getPrepaid:getPrepaid,
};