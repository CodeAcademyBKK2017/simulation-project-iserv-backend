const PrePostApi = require('../src/getPaidAndPost');
const contructors = require('../service/constructor');
const Joi = require('joi');
const Boom = require('boom');
const JoiScrema = require('../joiSchema/packageJoi')
const GlobalParams = new contructors.globalParam();

module.exports = {
    method: 'POST',
    path: '/packages',
    config:{
        validate:{
            payload: JoiScrema.requestSchema
        },
        response:{
            schema: JoiScrema.responseSchema
        }
    },
    handler: (request, reply) => {
        const responseFunction = (body)=>{
            //console.log('body:', body);
            reply(body)
        }
        const req = request.payload.secret;
        if(!req && req < 2){
            const error = new Error('Unexpected input');
            reply(Boom.boomify(error, { statusCode: 400 }))
        }else{
            PrePostApi.getPrePostpaid(req, responseFunction)
        }
    },
}