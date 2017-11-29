const Joi = require('joi');
module.exports = {
  validateSchema: {
    payload: Joi.object().keys({
      secret: Joi.string()
    }).options({allowUnknown: true})
  },
  responseSuccessSchema: {
    schema: Joi.object().keys({
      code: Joi.number().required(),
      data: Joi.object().keys({
        name: Joi.string(),
        age: Joi.number(),
        phone: Joi.string()
      })
    })
  },
  responseFailureSchema: {
    schema: Joi.object().keys({
      code: 400,
      error: 'ERROR'
    })
  }
};