const Joi = require('joi');

module.exports = {
    requestSchema:Joi.object().keys({
        user:Joi.string().token()
    }),
    responseSchema: Joi.object().keys({
        token:Joi.string().token()
    })
}