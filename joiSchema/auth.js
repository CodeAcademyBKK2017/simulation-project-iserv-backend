const Joi = require('Joi');

module.exports = {
    requestSchema : {
        user: Joi.string().alphanum().min(1).max(10).required()
    },
    responseSchema : Joi.object().keys({
        token: Joi.string().required()
    })
}