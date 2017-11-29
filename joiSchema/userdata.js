const Joi = require('Joi');

module.exports = {
    requestSchema : Joi.object().keys({
        secret: Joi.string().token()
    }),
    responseSchema : Joi.object().keys({
        age: Joi.object().required(),
    })
}