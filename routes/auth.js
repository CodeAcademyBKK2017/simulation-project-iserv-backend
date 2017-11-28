const libs = require('../src/lib');
const boom = require('boom');
const joi = require('joi');
const requestSchema = require('../joiSchema/auth');
module.exports = {
    method: 'GET',
    path: '/auth',
    config:{
        validate:{
            query:{
                user:requestSchema.requestSchema
            }
        },
        response:{
            schema:requestSchema.responseSchema
        }
    },
    handler: (request,reply) => {
       libs.getLogin(request.query.user).then((token)=>{
           reply(token);
       }).catch((err)=>{
           reply(boom.badRequest('Error message'));
       })
    }
}