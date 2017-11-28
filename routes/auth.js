const Login = require ('../src/getLogin');
const boom = require ('boom');
const Joi = require('joi');
const requestSchema = require('../joiSchema/auth')

module.exports = {
    method: 'GET',
    path: '/auth',
    config:{
        validate:{
            query:{
                user : requestSchema.requestSchema
            }
        },
        response:{
            schema : requestSchema.responseSchema
        }
    },
    handler: (request,reply) => {
        const username = request.query.user;
        if(!(username && username.length >= 3)){
            return reply(boom.badRequest('ERROR'));
        }
       Login.getLogin(request.query.user).then((token)=>{
           reply(token);
       }).catch((err)=>{
           reply(boom.badRequest('ERROR'));
       })
   }
   
}