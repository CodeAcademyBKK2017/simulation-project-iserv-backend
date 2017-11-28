const post = require('../src/postpaid');
const pre  = require('../src/prepaid');
const Joi = require('joi');

module.exports = {
    method: 'POST',
    path: '/packages',
    config:{
        validate:{
            headers:Joi.object({
                secret : Joi.string().alphanum().min(1).max(15).required()
            }).options({ allowUnknown: true })
        }
    },
    handler: (request,reply) => {
        //token c7b1a59ace5
        let token = request.headers.secret;
        let prepaids = pre.prepaid(token).then((res)=>{
           return res;
        })
        let postpaids = post.postpaid(token).then((res)=>{
            return res;
        })
        Promise.all([prepaids,postpaids]).then(value=>{
            reply(value);
        })
   }

   }