const joi = require('joi');
module.exports = {
    requestSchema:joi.object({
        secret:joi.string().alphanum().min(1).max(15).required()
      }).options({ allowUnknown: true })
}