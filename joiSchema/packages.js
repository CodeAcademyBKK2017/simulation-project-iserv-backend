const Joi = require('joi');

module.exports = {
  headerSchema: Joi.object({'token': Joi.string().token().required()}).options({allowUnknown: true}),
  responseSchema: Joi.object().keys({
    prepaid: Joi.object().required(),
    postpaid: Joi.object().required(),
  })
};