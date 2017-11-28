const Joi = require('joi');

module.exports = {
  requestSchema: Joi.object().keys({    
    username: Joi.string().regex(/^[a-zA-Z][a-zA-Z0-9]+$/).min(3).max(20).required()
  }),
  responseSchema: Joi.object().keys({
    token: Joi.string().alphanum().required()
  })
};