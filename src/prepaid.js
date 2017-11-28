const rp = require('request-promise');
const prepaid = (token)=>{
    let options = {
        method:'GET',
        uri:'https://code-academy-backend.herokuapp.com/prepaid',
        headers:{
            secret:token
        },
        json:true 
    };
    return rp(options)
    .then(function (printBody){
        let result = {};
        result['prepaid'] = printBody;
        return result;
    })
}
module.exports = {prepaid:prepaid}