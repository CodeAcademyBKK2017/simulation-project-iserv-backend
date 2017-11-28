const rp = require('request-promise');
const urlLogin = 'https://code-academy-backend.herokuapp.com/login';

let resultToken = {};

const getToken = (user) => {
    return  rp.post({url:urlLogin, form: { user: `${user}`}, json:true}, (err,httpResponse,body) => body)
            .then(res => res)
}

module.exports = {
    getToken:getToken,
};