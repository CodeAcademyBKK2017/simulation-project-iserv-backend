const prepaid = require('./getPrepaid');
const postpaid = require('./getPostpaid');

let resultPrepaidPostpaid = {};

const postPrepaidPostpaid = (token) => {
    return  prepaid.getPrepaid(token).then((resPrepaid) => {
                resultPrepaidPostpaid.prepaid = resPrepaid;
                return  postpaid.getPostpaid(token).then((resPostpaid) => {
                        resultPrepaidPostpaid.postpaid = resPostpaid;
                        return resultPrepaidPostpaid;
                });
    });
}

module.exports = {
    postPrepaidPostpaid,postPrepaidPostpaid
};