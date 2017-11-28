const requestURL = require('request-promise');
const getPostpaid = (url,token, responsePostFunction)=>{
    console.log(url,token)
    const options = {
        method: 'POST',
        uri: url,
        body: {
            secret: token
        },
        json: true // Automatically stringifies the body to JSON
    };
     requestURL(options)
    .then(function (parsedBody) {
        // POST succeeded...
        responsePostFunction(parsedBody);
    })
    .catch(function (err) {
        // POST failed...
        responsePostFunction(err)
    });
}

module.exports = {
    getPostpaid:getPostpaid
}