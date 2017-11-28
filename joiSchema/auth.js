const joi = require('joi');
module.exports = {
    requestSchema:joi.string().alphanum().min(1).max(10).required(),
    responseSchema:joi.object().keys({
        token:joi.string().required()
    })
}