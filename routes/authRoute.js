const auth = require('../src/auth');
const Boom = require('boom');
const Joi = require('joi');
const joiSchema = require('../joiSchema/auth')
const authRoute = {
        method: 'GET',
        path: '/auth',
        config: {
            validate :{
                query: joiSchema.requestquerySchema
            },
            response:{
                schema: joiSchema.responseSchema
            }
        },
    handler: (request,reply)=>{
    const user = request.query.user;
    auth.login(user)
    .then((token)=>{
        const response = {token:token}
        reply(response)
    })
    .catch(err=>reply(Boom.badData('No Token reply')))
}}
module.exports = authRoute