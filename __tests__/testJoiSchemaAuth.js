const Joi = require('joi');

// ----------

const JoiSchema = require('../joiSchema/authentication');

// ----------

test('JoiSchema: request get auth success 01', () => {
  const value = {
	  query: {
		  username: 'bob'
	  }
  };
  const schema = JoiSchema.requestSchema;

  const result = Joi.validate(value, schema);
  expect(result.error).toBe(null);
});

test('JoiSchema: request get auth success 02', () => {
  const value = {
    query: {
      username: 'bob',
      temp: 'xxx'
    }
  };
  const schema = JoiSchema.requestSchema;
  
  const result = Joi.validate(value, schema);
  expect(result.error).toBe(null);
});

test('JoiSchema: request get auth failure 01', () => {
  const value = {
    query: {}
  };
  const schema = JoiSchema.requestSchema;
  
  const result = Joi.validate(value, schema);
  expect(result.error).not.toBe(null);
});

test('JoiSchema: request get auth failure 02', () => {
  const value = {
	  query: {
		  username: 'abc1234567890'
	  }
  };
  const schema = JoiSchema.requestSchema;
	
  const result = Joi.validate(value, schema);
  expect(result.error).not.toBe(null);
});

// ----------

test('JoiSchema: response get auth success 01', () => {
  const value = {
    schema: {
      token: 'c7b1a59ace5'
    }
  };
  const schema = JoiSchema.responseSchema;

  const result = Joi.validate(value, schema);
  expect(result.error).toBe(null);
});

test('JoiSchema: response get auth failure 01', () => {
  const value = {
    schema: {
      token: ''
    }
  };
  const schema = JoiSchema.responseSchema;

  const result = Joi.validate(value, schema);
  expect(result.error).not.toBe(null);
});

test('JoiSchema: response get auth failure 02', () => {
  const value = {
    schema: {
      token: '!!!!!!!!!!!'
    }
  };
  const schema = JoiSchema.responseSchema;

  const result = Joi.validate(value, schema);
  expect(result.error).not.toBe(null);
});
