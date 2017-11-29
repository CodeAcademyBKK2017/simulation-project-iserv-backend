const Joi = require('joi');

module.exports = {
  headerSchema: Joi.object({'token': Joi.string().token().required()}).options({allowUnknown: true}),
  requestSchema: {
    part: Joi.string().regex(/^(age|name|phone)$/).required()  
  },
  responseSchema: Joi.object().keys({
    name: Joi.string(),
    age: Joi.number().integer(),
    phone: Joi.string()
  }).or('name','age','phone')
};