const userdata = require('../src/userdata');
const Boom = require('boom');
const joiSchema = require('../joiSchema/userdata')
const userdataRoute = {
    method: 'GET',
    path: '/userdata',
    config: {
        validate :{
            query: joiSchema.requestquerySchema,
            headers: joiSchema.requestheadersSchema
        },
        response:{
            schema: joiSchema.responseSchema
        }
    },
    handler: (request,reply)=>{
    const part = request.query.part;
    const token = request.headers.token;
    userdata.getUserdata(token)
    .then(userdata=>{
        reply({[part] : userdata[part]})
    })
    .catch(err=>{
        reply(Boom.badData('No User Data Reply'))
    })
    }
}
module.exports = userdataRoute