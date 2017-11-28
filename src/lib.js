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
 const prepaid = (token)=>{
   let options ={
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
 const postpaid = (token)=>{
   let options ={
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
 module.exports = {
     getLogin:getLogin,
     prepaid:prepaid,
     postpaid:postpaid
 }