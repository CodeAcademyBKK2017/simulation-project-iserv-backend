const rp = require('request-promise');
const postpaid = (token)=>{
    let options = {
        method:'POST',
        uri:'https://code-academy-backend.herokuapp.com/postpaid',
        body:{
            secret:token
        },
        json:true 
    };
    return rp(options)
    .then(function (printBody){
        let result = {};
        result['postpaid'] = printBody;
        return result;
    })
}
    module.exports = {postpaid:postpaid}