const PackageServices = require('../services/package_services');
const UserServices = require('../services/user_services');

// const UserDataAPI = (request, response) => {
//     if (request.headers) {
//         if (request.headers.secret) {
//             secret = request.headers.secret;
//             return GetPostPaid(secret).then((postpaid) => {
//                 if (postpaid.statusCode) {
//                     response({
//                         err: postpaid.error.err
//                     }).statusCode(postpaid.statusCode);
//                 } else {
//                     return GetPrepaid(secret).then((prepaid) => {
//                         if (prepaid.statusCode) {
//                             response({
//                                 err: prepaid.error.err
//                             }).statusCode(prepaid.statusCode);
//                         } else {
//                             const usersecret = `${postpaid.userDataKey}${prepaid.userDataKey}`;
//                             return GetUserData(usersecret).then((userdata) => response(userdata)).catch((err) => response({ err: err }));
//                         }
//                     }).catch((err) => err);
//                 }
//             }).catch((err) => err);
//         } else {
//             return Promise.resolve(response({ error: 'Missing Secret Parameter' }))
//         }
//     } else {
//         return Promise.resolve(response({ error: 'Missing Secret Parameter' }))
//     }
// }

const UserDataAPI = (secret) => {
    return Promise.all([PackageServices.GetPrePaid(secret), PackageServices.GetPostPaid(secret)]).then(([PrepaidData, PostpaidData]) => {
        if (PrepaidData.statusCode) {
            return err;
        } else {
            if (PostpaidData.statusCode) {
                return err;
            } else {
                const usersecret = `${PostpaidData.userDataKey}${PrepaidData.userDataKey}`;
                return UserServices.GetUserData(usersecret);
            }
        }

    }).catch((err) => err);

}

module.exports = UserDataAPI