const Joi = require('joi');

module.exports = {
    requestSchema:Joi.object().keys({
        secret: Joi.string().alphanum().min(1).max(11).required()
    }),
    responseSchema: Joi.object().keys({
        prepaid:Joi.object().required(),
        postpaid:Joi.object().required()
    })
}