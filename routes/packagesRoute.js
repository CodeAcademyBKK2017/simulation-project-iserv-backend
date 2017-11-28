const packages = require('../src/packages');
const Boom = require('boom');
const joiSchema = require('../joiSchema/packages')
const packagesRoute = {
    method: 'POST',
    path: '/packages',
    config:{
        validate:{
            query: joiSchema.requestquerySchema
        },
        response:{
            schema: joiSchema.responseSchema
        }
    },
    handler: (request,reply)=>{
    const secret = request.query.token;
    packages.getPrePostData(secret)
    .then(([prepaid, postpaid])=>{
        const response = {
            prepaid: prepaid,
            postpaid:postpaid
        }
        reply(response)
    })
    .catch(err=>reply(Boom.badRequest('Wrong data')))
}}
module.exports = packagesRoute;