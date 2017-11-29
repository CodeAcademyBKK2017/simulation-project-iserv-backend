const Joi = require('joi');
const loginJoiSchema = require('../joiSchema/login');
const packageJoiSchema = require('../joiSchema/packages.js');
const userdataJoiSchema = require('../joiSchema/userdata.js');

test('Login request schema: username has alphabet only ', () => {
  const {error} = Joi.validate({username: 'bob'}, loginJoiSchema.requestSchema);
  expect(error).toBeNull();
});

test('Login request schema: username alphabet and number only ', () => {
  const {error} = Joi.validate({username: 'b2ob3434'}, loginJoiSchema.requestSchema);
  expect(error).toBeNull();
});

test('Login request schema: username with number only ', () => {
  const {error} = Joi.validate({username: '234234'}, loginJoiSchema.requestSchema);
  expect(error).not.toBeNull();
});

test('Login request schema: username start with number and alphabet ', () => {
  const {error} = Joi.validate({username: '234bob'}, loginJoiSchema.requestSchema);
  expect(error).not.toBeNull();
});

test('Login request schema: username has special characters ', () => {
  const {error} = Joi.validate({username: '234@bob'}, loginJoiSchema.requestSchema);
  expect(error).not.toBeNull();
});

// -------------

test('Packages request schema: alphabet and number ', () => {
  const {error} = Joi.validate({token: 'b3242o234b'}, packageJoiSchema.headerSchema);
  expect(error).toBeNull();
});

test('Packages request schema: alphabet, number and special characters.', () => {
  const {error} = Joi.validate({token: 'b3@$242o234b'}, packageJoiSchema.headerSchema);
  expect(error).not.toBeNull();
});


// ---------------- User Data

test('UserData headers schema: alphabet, number and special characters.', () => {
  const {error} = Joi.validate({token: 'b3242o234b'}, userdataJoiSchema.headerSchema);
  expect(error).toBeNull();
});

test('UserData request schema: should have one of name, phone or age.', () => {
  const {error} = Joi.validate({part: 'name'}, userdataJoiSchema.requestSchema);
  expect(error).toBeNull();
});

test('UserData request schema: Fail doesn\'t have anyone of name, phone or age.', () => {
  const {error} = Joi.validate({part: 'weight'}, userdataJoiSchema.requestSchema);
  expect(error).not.toBeNull();
});

test('UserData response schema: have anyone of name, phone or age property in result.', () => {
  const {error} = Joi.validate({name: 'jack'}, userdataJoiSchema.responseSchema);
  expect(error).toBeNull();
});

test('UserData response schema: Fail doesn\'t have anyone property of name, phone or age in result.', () => {
  const {error} = Joi.validate({weight: 70}, userdataJoiSchema.responseSchema);
  expect(error).not.toBeNull();
});