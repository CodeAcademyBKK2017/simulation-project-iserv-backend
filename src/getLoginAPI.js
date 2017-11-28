const requestURL = require('request-promise');
const getLoginToken = (url,userName, responseFunction)=>{
    console.log(url,userName)
    const options = {
        method: 'POST',
        uri: url,
        body: {
            user: userName
        },
        json: true // Automatically stringifies the body to JSON
    };
     requestURL(options)
    .then(function (parsedBody) {
        // POST succeeded...
        responseFunction(parsedBody);
    })
    .catch(function (err) {
        // POST failed...
        responseFunction(err)
    });
}

module.exports = {
    getLoginToken:getLoginToken
}