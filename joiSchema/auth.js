const Joi = require('joi');
module.exports = {
  validateSchema: {
    query: Joi.object().keys({
      user: Joi.string().alphanum().min(3).max(10).required()
    }).options({allowUnknown: true})
  },
  responseSchema: {
    schema: Joi.object().keys({
      token: Joi.string().required()
    }).options({allowUnknown: true})
  }
};