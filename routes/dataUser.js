const rp = require('request-promise');
const getDataUser = (res)=>{
    
    let options ={
        method:'POST',
        uri:'https://code-academy-backend.herokuapp.com/user',
        headers:{
            secret:res
        },
        json:true 
    };
    return rp(options)
    .then(function (printBody){
       
        return printBody;
    })
}
module.exports={getDataUser:getDataUser}