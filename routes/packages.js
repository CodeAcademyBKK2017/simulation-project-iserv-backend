const libs = require('../src/lib');
const boom = require('boom');
const joi = require('joi');
module.exports = {
    method: 'POST',
    path: '/packages',
    config:{
      validate:{
        headers:joi.object({
          secret:joi.string().alphanum().min(1).max(15).required()
        }).options({ allowUnknown: true })
      }
    },
    handler: (request,reply) => {
      //token c7b1a59ace5
      const username = request.headers.secret;
      if(!(username.length>3)){
        return reply("Input vaild");
      }
      let token = request.headers.secret;
       let prepaids = libs.prepaid(token).then((res)=>{
         return res;
       })
       let postpaids = libs.postpaid(token).then((res)=>{
        return res;
      })
      Promise.all([prepaids,postpaids]).then(value=>{
        reply(value);
      })
    }
}