const Joi = require('Joi');

module.exports = {
    requestSchema : Joi.object().keys({
        secret: Joi.string().token()
    }),
    responseSchema : Joi.object().keys({
        prepaid: Joi.object().required(),
        postpaid: Joi.object().required()
    })
}