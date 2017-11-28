const Joi = require('joi');

module.exports = {
    requestSchema: Joi.object().keys({
        secret: Joi.string().token().min(1).max(10).required()
    }).options({ allowUnknown: true }),
    responseSchema: Joi.object().keys({
        token: Joi.string().token()
    })
}