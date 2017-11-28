const rp = require('request-promise');
const urlPostpaid = 'https://code-academy-backend.herokuapp.com/postpaid';

const getPostpaid = (token) => {
    return  rp.post({url:urlPostpaid, form: { secret: `${token}` }, json:true}, (err,httpResponse,body) => body)
            .then((resPostpaid) => resPostpaid);
}

module.exports = {
    getPostpaid:getPostpaid,
};