const Joi = require('joi');
module.exports = {
    requestquerySchema : Joi.object().keys({
        token : Joi.string().min(1).max(20).required() 
    }),
    responseSchema : Joi.object().keys({
        prepaid : Joi.object().keys({}),
        postpaid : Joi.object().keys({})
    })
}