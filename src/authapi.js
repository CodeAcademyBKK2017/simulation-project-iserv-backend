const UserServices = require('../services/user_services');

const AuthAPI = (username) => {
    return UserServices.Login(username);
}

module.exports = AuthAPI