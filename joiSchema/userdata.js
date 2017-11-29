const Joi = require('joi');
module.exports = {
    requestquerySchema : Joi.object().keys({
        part : Joi.string().min(1).max(20).required(),
    }),
    requestheadersSchema : Joi.object().keys({
            token :Joi.string()
    }),
    responseSchema : Joi.object().keys({
        age : Joi.number()
    })
}