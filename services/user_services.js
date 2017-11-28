const requestPromise = require('request-promise');

const Login = (username) => {
    const LOGIN_API = "https://code-academy-backend.herokuapp.com/login";
    var options = {
        method: 'POST',
        uri: LOGIN_API,
        body: {
            user: username
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

const GetUserData = (token) => {
    const POSTPAID_API = "https://code-academy-backend.herokuapp.com/user";
    var options = {
        method: 'POST',
        uri: POSTPAID_API,
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

module.exports = {
    Login: Login,
    GetUserData: GetUserData
}