const r = require('../services/requests');
const p = require('./packages')
const op1 = {...r.options};
const getUserdata = (token)=>{
   return p.getPrePostData(token)
    .then(([prepaid, postpaid])=>{
        const keys = postpaid.userDataKey + prepaid.userDataKey
        return keys;
    }).then((keys)=>{
    op1.method = 'POST';
    op1.uri = `${r.backEndUrl}/user`;
    op1.headers.secret = keys;
    return r.requestPromise(op1)
    });
}
module.exports = {getUserdata}