const prepaid = require('./getPrepaid');
const postpaid = require('./getPostpaid');
const contructors = require('../service/constructor');
const GlobalParams = new contructors.globalParam();
let responses = {}
const getPrePostpaid = (token,responseFunction)=>{
    const urlPre = GlobalParams.getPrepaid();
    const urlPost = GlobalParams.getPostpaid();

    prepaid.getPrepaid(urlPre,token).then(prepaid =>{
            responses.prepaid = prepaid;
        postpaid.getPostpaid(urlPost,token).then(postpaid =>{
            responses.postpaid = postpaid;
            responseFunction(responses);
        })
    })
   
}

module.exports = {
    getPrePostpaid:getPrePostpaid
}