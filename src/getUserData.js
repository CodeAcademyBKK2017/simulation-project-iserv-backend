const requestURL = require('request-promise');
const auth = require('./getLoginAPI')
const prepost = require('./getPaidAndPost');
const getDataFromServer = require('./getUserDataFromBack');
const contructors = require('../service/constructor');
const GlobalParams = new contructors.globalParam();
const responseFN = (parth,responseFunction,data)=>{
    const code = `${data.postpaid.userDataKey}${data.prepaid.userDataKey}`;
    const urlUserdata = GlobalParams.getUserdata();
    getDataFromServer.getUserdataFromBackend(urlUserdata,code,parth).then(res=>responseFunction(res));
}
const getUserData = (parth,userName,responseFunction)=>{
    const urlLogin = GlobalParams.getLogin();
    return auth.getLoginToken(urlLogin,userName).then(data=>{
       prepost.getPrePostpaid(data.token,responseFN.bind(this,parth,responseFunction));
    })
}
module.exports = {
    getUserData:getUserData,
    responseFN:responseFN
}