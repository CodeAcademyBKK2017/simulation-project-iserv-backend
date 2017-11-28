const requestPromise = require('request-promise');
const backEndUrl = 'https://code-academy-backend.herokuapp.com';
const options = {
    method : '',
    uri: '',
    json : true,
    body: { user: '',
    secret : ''
    },
    headers: { secret : ''
            /* 'content-type': 'application/x-www-form-urlencoded' */ // Is set automatically
            },  
}
module.exports = {
    requestPromise,
    backEndUrl,
    options
};