const requestURL = require('request-promise');
const getLoginToken = (url,userName)=>{
    const options = {
        method: 'POST',
        uri: url,
        body: {
            user: userName
        },
        json: true // Automatically stringifies the body to JSON
    };
     return requestURL(options)
    .then(parsedBody =>({"token":parsedBody}))
    .catch(err => err);
}

module.exports = {
    getLoginToken:getLoginToken
}