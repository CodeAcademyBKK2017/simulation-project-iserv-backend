const login = require('../src/login');
const packages = require('../src/packages');
const user = require('../src/user');

const getUserData = (token) => {
    return  packages.postPrepaidPostpaid(token).then(res => {
                const userDataKeys = res.postpaid.userDataKey + res.prepaid.userDataKey ;
                return user.getUser(userDataKeys)
    })
}

module.exports = {
    getUserData,getUserData
}