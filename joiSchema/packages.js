const Joi = require('joi');
module.exports = {
  validateSchema: {
    payload: Joi.object().keys({
      secret: Joi.string()
    }).options({allowUnknown: true})
  }
};