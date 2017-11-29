const requestURL = require('request-promise');
const getPostpaid = (url,token)=>{
    const options = {
        method: 'POST',
        uri: url,
        body: {
            secret: token
        },
        json: true // Automatically stringifies the body to JSON
    };
    return requestURL(options)
    .then(parsedBody =>parsedBody)
    .catch(err => err);
}

module.exports = {
    getPostpaid:getPostpaid
}