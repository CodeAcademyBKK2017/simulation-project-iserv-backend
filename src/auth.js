const r = require('../services/requests');
const op1 = {...r.options};
const login = (userName)=>{
    op1.method = 'POST'
    op1.body.user = userName;
    op1.uri = `${r.backEndUrl}/login`;
    return r.requestPromise(op1);
}
module.exports = {login};