const rp = require('request-promise');
const urlLogin = 'https://code-academy-backend.herokuapp.com/user';

let resultUserData = {};

const getUser = (key) => {
    return  rp.post({url:urlLogin, headers: { secret: `${key}`}, json:true}, (err,httpResponse,body) => body)
}

module.exports = {
    getUser:getUser,
};