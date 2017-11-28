const Joi = require('joi');

module.exports = {
    requestSchema: Joi.object({
        secret: Joi.string().alphanum().min(1).max(11).required()
    }).options({ allowUnknown: true }),
    responseSchema: Joi.object().keys({
        prepaid: Joi.object().optional(),
        postpaid: Joi.object().optional()
    })
}