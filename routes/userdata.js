const libs = require('../src/lib');
module.exports = {
    method:'GET',
    path:'/userdata',
    handler:(request,reply)=>{
        const parts = request.query.part;
        let token = request.headers.token;
        let prepaids = libs.prepaid(token).then((res)=>{
            return res.prepaid.userDataKey;
          })
          let postpaids = libs.postpaid(token).then((res)=>{
           return res.postpaid.userDataKey;
         })
         let total = Promise.all([postpaids,prepaids]).then(value=>{
           let result = value[0]+value[1];
           return libs.getUser(result).then((userdata)=>{
               //reply({[parts]:data[parts]});
            //    console.log("asdasd::  ", parts, typeof parts, userdata, typeof userdata)
            //    console.log({[parts] : userdata[parts]});
               //reply(data['age']);
   
               return {[parts] : userdata[parts]};
           })
         })

         reply(total)
    }
}