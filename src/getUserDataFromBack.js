const requestURL = require('request-promise');
const contructors = require('../service/constructor');
const GlobalParams = new contructors.globalParam();
const getUserdataFromBackend = (url,code,parth)=>{
    const options = {
        method: 'POST',
        uri: url,
        headers:{
            secret: code
        },
        json: true // Automatically stringifies the body to JSON
    };
    return requestURL(options)
    .then(res =>{
        const responseJson = {};
        responseJson[parth] = res[parth]
        return responseJson;
    })
    .catch(err => err);
}

module.exports = {
    getUserdataFromBackend:getUserdataFromBackend
}