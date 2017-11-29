const Joi = require('joi')
const auth = require('../joiSchema/authJoi')
const packages = require('../joiSchema/packageJoi')

test('Authenticate Joi Valide requestSchema its work',()=>{
    Joi.validate({ user: 'bob' }, auth.requestSchema, function (err, value) {
        expect(err).toEqual(null);
     });
})
test('Authenticate Joi Valide responseSchema its work',()=>{
    Joi.validate({ token: 'c7b1a59ace5' }, auth.responseSchema, function (err, value) {
        expect(err).toEqual(null);
     });
})
test('Authenticate Joi Valide requestSchema its work',()=>{
    Joi.validate({ secret: 'c7b1a59ace5' }, packages.requestSchema, function (err, value) {
        expect(err).toEqual(null);
     });
})
test('Authenticate Joi Valide responseSchema its work',()=>{
        const valid = {
            prepaid: {
                "packageName": "T-prepaid",
                "startDate": "23-01-2008",
                "phone": "+66238728295",
                "userDataKey": "435"
            },
            postpaid: {
                "packageName": "T-postpaid",
                "startDate": "23-01-2017",
                "phone": "+66298728295",
                "userDataKey": "432"
            }
        }
    Joi.validate(valid, packages.responseSchema, function (err, value) {
        expect(err).toEqual(null);
     });
})