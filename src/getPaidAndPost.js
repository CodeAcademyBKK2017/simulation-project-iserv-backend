const prepaid = require('./getPrepaid');
const postpaid = require('./getPostpaid');
const contructors = require('../service/constructor');
const GlobalParams = new contructors.globalParam();
let responses = {}
const getPrePostpaid = (token,responseFunction)=>{
    const urlPre = GlobalParams.getPrepaid();
    const urlPost = GlobalParams.getPostpaid();

    const responsePaidFunction = (body)=>{
        responses.prepaid = body
        postpaid.getPostpaid(urlPost,token, responsePostFunction)
    }
    const responsePostFunction = (body)=>{
        responses.postpaid = body
        console.log(responses);
        responseFunction(responses);
    }

    prepaid.getPrepaid(urlPre,token, responsePaidFunction)
   
}

module.exports = {
    getPrePostpaid:getPrePostpaid
}