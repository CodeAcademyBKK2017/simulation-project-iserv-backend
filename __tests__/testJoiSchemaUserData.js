const Joi = require('joi');

// ----------

const JoiSchema = require('../joiSchema/userData');

// ----------

test('JoiSchema: request get user data success 01', () => {
  const value = {
	  query: {
		  part: 'name'
    },
    headers: {
		  'token': 'c7b1a59ace5'
	  }
  };
  const schema = JoiSchema.requestSchema;

  const result = Joi.validate(value, schema);
  expect(result.error).toBe(null);
});

test('JoiSchema: request get user data success 02', () => {
  const value = {
	  query: {
		  part: 'age'
    },
    headers: {
		  'token': 'c7b1a59ace5'
	  }
  };
  const schema = JoiSchema.requestSchema;
  
  const result = Joi.validate(value, schema);
  expect(result.error).toBe(null);
});

test('JoiSchema: request get user data failure 01', () => {
  const value = {
    query: {
		  part: 'XXX'
    },
    headers: {
		  'token': 'c7b1a59ace5'
	  }
  };
  const schema = JoiSchema.requestSchema;
  
  const result = Joi.validate(value, schema);
  expect(result.error).not.toBe(null);
});

test('JoiSchema: request get user data failure 02', () => {
  const value = {
	  query: {
		  part: 'age'
    },
    headers: {
		  'token': 1234567890
	  }
  };
  const schema = JoiSchema.requestSchema;
	
  const result = Joi.validate(value, schema);
  expect(result.error).not.toBe(null);
});

// ----------

test('JoiSchema: response get user data success 01', () => {
  const value = {
    schema: {
      phone: '+66238728295'
    }
  };
  const schema = JoiSchema.responseSchema;

  const result = Joi.validate(value, schema);
  expect(result.error).toBe(null);
});

test('JoiSchema: response get user data failure 01', () => {
  const value = {
    schema: {
      name: 'Bobby',
      age: 65,
      phone: '+66238728295'
    }
  };
  const schema = JoiSchema.responseSchema;

  const result = Joi.validate(value, schema);
  expect(result.error).not.toBe(null);
});

test('JoiSchema: response get user data failure 02', () => {
  const value = {
    schema: {}
  };
  const schema = JoiSchema.responseSchema;

  const result = Joi.validate(value, schema);
  expect(result.error).not.toBe(null);
});
