const Joi = require('joi');

// ----------

const JoiSchema = require('../joiSchema/packages');

// ----------

test('JoiSchema: request post packages success 01', () => {
  const value = {
    payload: {
      token: 'c7b1a59ace5'
    }
  };
  const schema = JoiSchema.requestSchema;

  const result = Joi.validate(value, schema);
  expect(result.error).toBe(null);
});

test('JoiSchema: request post packages failure 01', () => {
  const value = {
    payload: {
      token: ''
    }
  };
  const schema = JoiSchema.requestSchema;

  const result = Joi.validate(value, schema);
  expect(result.error).not.toBe(null);
});

test('JoiSchema: request post packages failure 02', () => {
  const value = {
    payload: {
      token: '!!!!!!!!!!!'
    }
  };
  const schema = JoiSchema.requestSchema;

  const result = Joi.validate(value, schema);
  expect(result.error).not.toBe(null);
});

// ----------

test('JoiSchema: response post packages success 01', () => {
  const value = {
    schema: {
      prepaid: {
        packageName: 'T-prepaid',
        startDate: '12-04-2005',
        phone: '+6612313234',
        userDataKey: '111'
      },
      postpaid: {
        packageName: 'T-postpaid',
        startDate: '1-4-2015',
        phone: '+6656313234',
        userDataKey: '111'
      }
    }
  };
  const schema = JoiSchema.responseSchema;

  const result = Joi.validate(value, schema);
  expect(result.error).toBe(null);
});

test('JoiSchema: response post packages success 02', () => {
  const value = {
    schema: {
      prepaid: {
        packageName: 'T-prepaid',
        startDate: '12-04-2005',
        phone: '+6612313234',
        userDataKey: '111'
      }
    }
  };
  const schema = JoiSchema.responseSchema;

  const result = Joi.validate(value, schema);
  expect(result.error).toBe(null);
});

test('JoiSchema: response post packages success 03', () => {
  const value = {
    schema: {}
  };
  const schema = JoiSchema.responseSchema;

  const result = Joi.validate(value, schema);
  expect(result.error).toBe(null);
});

test('JoiSchema: response post packages failure 01', () => {
  const value = {
    schema: {
      prepaid: {
        packageName: 'T-prepaid',
        startDate: '12-04-2005'
      }
    }
  };
  const schema = JoiSchema.responseSchema;

  const result = Joi.validate(value, schema);
  expect(result.error).not.toBe(null);
});

test('JoiSchema: response post packages failure 02', () => {
  const value = {
    schema: {
      prepaid: {
        packageName: 'T-prepaid',
        startDate: '12-04-2005',
        phone: '+6612313234',
        userDataKey: 111
      }
    }
  };
  const schema = JoiSchema.responseSchema;

  const result = Joi.validate(value, schema);
  expect(result.error).not.toBe(null);
});
