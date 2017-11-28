const prepaid = require('./getPrepaid');
const postpaid = require('./getPostpaid');

let resultPrepaidPostpaid = {};

const getPrepaid = (token) => prepaid.getPrepaid(token);
const getPostpaid = (token) => postpaid.getPostpaid(token);

const postPrepaidPostpaid = (token) => {
    return  getPrepaid(token).then((resPrepaid) => {
                resultPrepaidPostpaid.prepaid = resPrepaid;
                return getPostpaid(token).then((resPostpaid) => {
                    resultPrepaidPostpaid.postpaid = resPostpaid;
                    return resultPrepaidPostpaid;
                })
            })
}

module.exports = {
    postPrepaidPostpaid,postPrepaidPostpaid
};