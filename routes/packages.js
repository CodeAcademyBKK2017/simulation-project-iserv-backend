const post = require('../src/postpaid');
const pre  = require('../src/prepaid');
const Joi = require('joi');
const responesPack = require('../joiSchema/packages')

module.exports = {
    method: 'POST',
    path: '/packages',
    config:{
        validate:{
            headers:responesPack.responesPack
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