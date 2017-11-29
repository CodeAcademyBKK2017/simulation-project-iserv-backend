const requestURL = require('request-promise');
const getPrepaid = (url,token)=>{
    const options = {
        method: 'GET',
        uri: url,
        headers: {
            secret: token
        },
        json: true // Automatically stringifies the body to JSON
    };
     return requestURL(options)
    .then(parsedBody => parsedBody)
    .catch(err =>err);
}

module.exports = {
    getPrepaid:getPrepaid
}