const Joi = require('joi');
module.exports = {
    requestquerySchema : Joi.object().keys({
        token : Joi.string().min(1).max(20).required()
    }),
    responseSchema : Joi.object().keys({
        prepaid : Joi.object().keys({
            packageName: Joi.string(),
            startDate: Joi.string(),
            phone: Joi.string(),
            userDataKey: Joi.string()
        }),
        postpaid : Joi.object().keys({
            packageName: Joi.string(),
            startDate: Joi.string(),
            phone: Joi.string(),
            userDataKey: Joi.string()
        })
    })
}