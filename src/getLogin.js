const rp = require('request-promise');
const getLogin = (user)=>{
    let options ={
        method:'POST',
        uri:'https://code-academy-backend.herokuapp.com/login',
        body:{
            user:user
        },
        json:true 
    };
    return rp(options)
    .then(function (printBody){
        let result = {};
        result['token'] = printBody;
        return result;
    })
}
module.exports={getLogin:getLogin}