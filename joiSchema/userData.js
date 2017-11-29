const Joi = require('joi');

// ----------

const requestSchema = {

  query: Joi.object().keys({
    part: Joi.string().regex(/^(name|age|phone)$/).required()
  }).options({allowUnknown: true}),

  headers: Joi.object().keys({
    token: Joi.string().token().required()
  }).options({allowUnknown: true})
};

const responseSchema = {
  schema: Joi.object().keys({
	  name: Joi.string(),
	  age: Joi.number(),
	  phone: Joi.string()
  }).min(1).max(1)
};

// ----------

module.exports = {
  requestSchema,
  responseSchema
};
