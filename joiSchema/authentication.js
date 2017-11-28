const Joi = require('joi');

// ----------

const requestSchema = {
  // params: {},
  query: {
	  username: Joi.string().alphanum().min(1).max(10).required()
  }
  // headers: {},
  // payload: {},
};

const responseSchema = {
  schema: Joi.object().keys({
	  token: Joi.string().token().required()
  })
};

// ----------

module.exports = {
  requestSchema,
  responseSchema
};
