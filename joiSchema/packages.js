const Joi = require('joi');

// ----------

const requestSchema = {
  payload: {
	  token: Joi.string().token().required()
  }
};

const responseSchema = {
  schema: Joi.object().keys({
    prepaid: Joi.object().keys({
      packageName: Joi.string().required(),
      startDate: Joi.date().required(),
      phone: Joi.string().required(),
      userDataKey: Joi.string().required()
	  }).optional(),
    postpaid: Joi.object().keys({
      packageName: Joi.string().required(),
      startDate: Joi.date().required(),
      phone: Joi.string().required(),
      userDataKey: Joi.string().required()
	  }).optional()
  })
};

// ----------

module.exports = {
  requestSchema,
  responseSchema
};
