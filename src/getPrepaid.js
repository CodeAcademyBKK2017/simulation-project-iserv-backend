const requestURL = require('request-promise');
const getPrepaid = (url,token, responsePaidFunction)=>{
    console.log(url,token)
    const options = {
        method: 'GET',
        uri: url,
        headers: {
            secret: token
        },
        json: true // Automatically stringifies the body to JSON
    };
     requestURL(options)
    .then(function (parsedBody) {
        // POST succeeded...
        responsePaidFunction(parsedBody);
    })
    .catch(function (err) {
        // POST failed...
        responsePaidFunction(err)
    });
}

module.exports = {
    getPrepaid:getPrepaid
}