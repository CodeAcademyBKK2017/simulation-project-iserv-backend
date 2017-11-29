const LoginApi = require('../src/getLoginAPI');
const contructors = require('../service/constructor');
const Joi = require('Joi')
const Boom = require('boom')
const JoiScrema = require('../joiSchema/authJoi')
const GlobalParams = new contructors.globalParam();

module.exports = {
    method: 'GET',
    path: '/auth',
    config:{
        validate:{
            query:JoiScrema.requestSchema
        },
        response:{
            schema: JoiScrema.responseSchema
        }
    },
    handler: (request, reply) => {
        const url = GlobalParams.getLogin();
        const req = request.query.user;
        if(!req && req.length < 1) {
            reply(Boom.badRequest('invalid user '));
        }else{ 
            LoginApi.getLoginToken(url,req).then(token=>{
                reply(token)
            })
            
        }
    },
}