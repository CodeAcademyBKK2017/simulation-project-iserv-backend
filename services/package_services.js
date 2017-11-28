const requestPromise = require('request-promise');

const GetPrePaid = (token) => {
    const PREPAID_API = "https://code-academy-backend.herokuapp.com/prepaid";
    var options = {
        method: 'GET',
        uri: PREPAID_API,
        headers: {
            secret: token
        },
        json: true // Automatically stringifies the body to JSON
    };
    return requestPromise(options).then((parsedBody) => {
            // POST succeeded...
            return parsedBody;
        })
        .catch((err) => {
            // POST failed...
            return err;
        });
}

const GetPostPaid = (token) => {
    const POSTPAID_API = "https://code-academy-backend.herokuapp.com/postpaid";
    var options = {
        method: 'POST',
        uri: POSTPAID_API,
        body: {
            secret: token
        },
        json: true // Automatically stringifies the body to JSON
    };
    return requestPromise(options).then((parsedBody) => {
            // POST succeeded...
            return parsedBody;
        })
        .catch((err) => {
            // POST failed...
            return err;
        });
}

module.exports = {
    GetPrePaid: GetPrePaid,
    GetPostPaid: GetPostPaid
}