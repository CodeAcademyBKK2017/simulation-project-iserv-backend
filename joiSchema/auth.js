const Joi = require('joi');
module.exports = {
    requestSchema: Joi.string().alphanum().min(1).max(3).required(),
    responseSchema: Joi.object().keys({
        token:Joi.string().required()
    })
}