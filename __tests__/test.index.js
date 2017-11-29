const Joi = require('joi')
const auth = require('../joiSchema/auth')
const packages = require('../joiSchema/packages')
const userdata = require('../joiSchema/userdata')

test('Success Joi auth request',()=>{
    let result = Joi.validate({ user: 'avs' }, auth.requestquerySchema);
    expect(result.error).toBe(null);
})
test('Success Joi auth response',()=>{
    let result = Joi.validate({ token: 'avs' }, auth.responseSchema);
    expect(result.error).toBe(null);
})
test('Success Joi packages request',()=>{
    const result = Joi.validate({ token: 'abc' }, packages.requestquerySchema);
    expect(result.error).toBe(null);
})
test('Success Joi packages reponse',()=>{
    const result = Joi.validate({ prepaid : {}, postpaid :{}  }, packages.responseSchema);
    expect(result.error).toBe(null);
})
test('Success Joi userdata request query',()=>{
    const result = Joi.validate({ part : 'age'}, userdata.requestquerySchema);
    expect(result.error).toBe(null);
})
test('Success Joi userdata request headers',()=>{
    const result = Joi.validate({ token: 'abc'}, userdata.requestheadersSchema);
    expect(result.error).toBe(null);
})

test('Success Joi userdata reponse',()=>{
    const result = Joi.validate({ age : 65  }, userdata.responseSchema);
    expect(result.error).toBe(null);
})

test('Success src auth',()=>{
    jest.mock('../services/requests', () => {
       const rp = (options)=>Promise.resolve('c7b1a59ace5')
        return {
            requestPromise: rp,
            backEndUrl : 'ytttyt',
            options:{
                method : '',
                body : { user : ''},
                uri : '' 
            }
        }; 
    })
    const srcauth = require('../src/auth')
    const user = 'bob';
   return  srcauth.login(user).then((result)=>{
        expect(result).toEqual('c7b1a59ace5');
     })
})

test('Success src packages',()=>{
    const token = 'c7b1a59ace5';
    const arrObj = [{x:1},{y:2}]
        jest.resetModules();
        jest.mock('../services/requests', () => {
            const rp = (options)=>{
                if(options.uri === 'testserver/prepaid'){
                    return Promise.resolve({x:1});
                }else if (options.uri === 'testserver/postpaid'){
                    return Promise.resolve({y:2})
                }
            }
             return {
                 requestPromise: rp,
                 backEndUrl : 'testserver',
                 options:{
                     method : '',
                     body : { user : '',
                     secret : ''
                      },
                     uri : '' ,
                     headers : {
                        secret : ''
                    },
                 },
             }; 
         })
    const srcpackages = require('../src/packages')
    return srcpackages.getPrePostData(token).then((result)=>{
        expect(result).toMatchObject(arrObj);
    })
})
test('Success src userdata',()=>{
    const secret = 'c7b1a59ace5';
    const part = 'age';
    const resultObj = {age : {}}
        jest.resetModules();
        jest.mock('../services/requests', () => {
            const rp = (options)=>{
                    return Promise.resolve({age : {}});
            }
             return {
                 requestPromise: rp,
                 backEndUrl : 'testserver',
                 options:{
                     method : '',
                     body : { user : '',
                     secret : ''
                      },
                     uri : '' ,
                     headers : {
                        secret : ''
                    },
                 },
             }; 
         })
    const userdata = require('../src/userdata')
    return userdata.getUserdata(secret,part).then((result)=>{
        expect(result).toMatchObject(resultObj);
    })
})
test('Fail Joi auth request',()=>{
    let result = Joi.validate({ user: 'avsxxx' }, auth.requestquerySchema);
    expect(result.error).not.toBe(null);
})
test('Fail Joi auth response',()=>{
    let result = Joi.validate({ token: 312321 }, auth.responseSchema);
    expect(result.error).not.toBe(null);
})
test('Fail Joi packages request',()=>{
    let result = Joi.validate({ user: 'avsxxx' }, packages.requestquerySchema);
    expect(result.error).not.toBe(null);
})
test('Fail Joi packages response',()=>{
    let result = Joi.validate({ prepaid : { xxx : ''}, postpaid :{}  }, packages.responseSchema);
    expect(result.error).not.toBe(null);
})
test('Fail Joi userdata request query',()=>{
    const result = Joi.validate({ part : 999}, userdata.requestquerySchema);
    expect(result.error).not.toBe(null);
})
test('Fail Joi userdata request headers',()=>{
    const result = Joi.validate({ token: 999}, userdata.requestheadersSchema);
    expect(result.error).not.toBe(null);
})
test('Fail Joi userdata reponse',()=>{
    const result = Joi.validate({ age : 'xx'  }, userdata.responseSchema);
    expect(result.error).not.toBe(null);
})



test('Fail src auth',()=>{
    jest.resetModules();
    jest.mock('../services/requests', () => {
       const rp = (options)=>Promise.reject('Some Error')
        return {
            requestPromise: rp,
            backEndUrl : 'ytttyt',
            options:{
                method : '',
                body : { user : ''},
                uri : '' 
            }
        }; 
    })
    const srcauth = require('../src/auth')
    const user = 'xxx';
   return  srcauth.login(user).catch((err)=>{
        expect(err).toEqual('Some Error');
     })
})
test('Fail src packages',()=>{
    const token = 'c7b1a59ace5';
        jest.resetModules();
        jest.mock('../services/requests', () => {
            const rp = (options)=>{
                if(options.uri === 'testserver/prepaid'){
                    return Promise.reject('Some error from bk');
                }else if (options.uri === 'testserver/postpaid'){
                    return Promise.resolve('Some error from bk')
                }
            }
             return {
                 requestPromise: rp,
                 backEndUrl : 'testserver',
                 options:{
                     method : '',
                     body : { user : '',
                     secret : ''
                      },
                     uri : '' ,
                     headers : {
                        secret : ''
                    },
                 },
             }; 
         })
    const srcpackages = require('../src/packages')
    return srcpackages.getPrePostData(token).catch((result)=>{
        expect(result).toBe('Some error from bk');
    })
})
test('Fail src userdata',()=>{
    const secret = 'c7b1a59ace5';
    const part = 'age';
    const err = 'Some error from bk userdata'
        jest.resetModules();
        jest.mock('../services/requests', () => {
            const rp = (options)=>{
                    return Promise.reject('Some error from bk userdata');
            }
             return {
                 requestPromise: rp,
                 backEndUrl : 'testserver',
                 options:{
                     method : '',
                     body : { user : '',
                     secret : ''
                      },
                     uri : '' ,
                     headers : {
                        secret : ''
                    },
                 },
             }; 
         })
    const userdata = require('../src/userdata')
    return userdata.getUserdata(secret,part).catch((result)=>{
        expect(result).toBe(err);
    })
})