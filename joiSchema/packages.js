const Joi = require('joi');
module.exports = {
    responesPack : Joi.object({
        secret : Joi.string().alphanum().min(1).max(15).required()
    }).options({ allowUnknown: true })
}