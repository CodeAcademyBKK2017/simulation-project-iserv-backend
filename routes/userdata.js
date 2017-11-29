const login = require ('../src/getLogin');
const post = require('../src/postpaid');
const pre  = require('../src/prepaid');
const dataUser = require('./dataUser');
module.exports = {
    method :'GET',
    path : '/userdata',
    handler : (request,reply)=>{
        const part = request.query.part;
        const token = request.headers.token;
        console.log(part);
        console.log(token);
        let prepaids = pre.prepaid(token).then((res)=>{
            return res;
         })
         let postpaids = post.postpaid(token).then((res)=>{
             return res;
         })
         const aaa = Promise.all([prepaids,postpaids]).then(value=>{
             const userDatakeyPostpaid = value[1].postpaid.userDataKey;
             const userDatakeyPrepaid = value[0].prepaid.userDataKey;
             const oj = {}
             oj.secret = userDatakeyPostpaid + userDatakeyPrepaid;
             return oj.secret;
         }).then(res => {
            return dataUser.getDataUser(res);
         }).then(res => {
             console.log(res);
             if (res.hasOwnProperty(part)){
                 const nanny = {}
                 nanny[part] = res[part]
                 return nanny;
             }else{
                 return 'ERROR'
             }
         });

         reply(aaa);
         // { secret : postpaid.Datakey + prepaid.datakey }
         // { secret : 432435 }
         
    }
}