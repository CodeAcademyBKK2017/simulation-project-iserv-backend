const Joi = require('joi');
module.exports = {
    requestquerySchema : Joi.object().keys({
        user : Joi.string().min(1).max(5).required() 
    }),
    responseSchema : Joi.object().keys({
        token: Joi.string().required()
    })
}