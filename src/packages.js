const r = require('../services/requests');
const op1 = {...r.options};
const op2 = {...r.options};

const getPrePostData = (secret)=>{
    op1.headers.secret = secret;
    op1.method = 'GET';
    op1.uri = `${r.backEndUrl}/prepaid`;
    op2.method = 'POST';
    op2.uri = `${r.backEndUrl}/postpaid`;
    op2.body.secret = secret;
    return Promise.all([r.requestPromise(op1),r.requestPromise(op2)]);
}
module.exports = {
    getPrePostData
};