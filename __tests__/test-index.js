const Joi = require('joi');
const joiSchemaAuth = require('../joiSchema/auth');
const joiSchemaPackages = require('../joiSchema/packages');

test('[online][success][expect] /auth', () => {
  const lib = require('../src/lib');
  return lib.auth('bob').then((data) => {
    expect(data).toMatchObject({'code': 200, 'token': 'c7b1a59ace5'});
  });
});

test('[online][success][Joi] /auth', () => {
  const lib = require('../src/lib');
  return lib.auth('bob').then((data) => {
    Joi.validate({data}, joiSchemaAuth.responseSchema);
  });
});

test('[offline][success][mock + expect] /auth', () => {
  jest.resetModules();
  jest.mock('request-promise', () => {
    const rp = () => Promise.resolve('c7b1a59ace5');
    return rp;
  });
  const lib = require('../src/lib');
  lib.auth('bob').then((data) => {
    expect(data).toMatchObject({'code': 200, 'token': 'c7b1a59ace5'});
  });
});

test('[offline][fail][mock + expect] /auth', () => {
  jest.resetModules();
  jest.mock('request-promise', () => {
    const rp = () => Promise.reject({
      statusCode: '400',
      error: {err: 'SERVER DOWN'}
    });
    return rp;
  });
  const lib = require('../src/lib');
  lib.auth('bobxxx').then((data) => {
    expect(data).toMatchObject(({'code': 400, 'error': 'SERVER DOWN'}));
  });
});

// test('/packages', () => lib.packages('c7b1a59ace5').then((data) => {
//   expect(data).toMatchObject({'code': 200,'prepaid': {'packageName': 'T-prepaid','startDate': '23-01-2008','phone': '+66238728295','userDataKey': '435'},'postpaid': {'packageName': 'T-postpaid','startDate': '23-01-2017','phone': '+66298728295','userDataKey': '432'}});
// }));

// test('/packages', () => lib.packages('').then((data) => {
//   expect(data).toMatchObject({'code': 200});
// }));

test('[offline][success][mock + expect] /user', () => {
  jest.resetModules();
  jest.mock('request-promise', () => {
    const rp = (option) => {
      if (option.uri === 'https://code-academy-backend.herokuapp.com/prepaid') {
        return Promise.resolve({
          'packageName': 'T-prepaid',
          'startDate': '23-01-2008',
          'phone': '+66238728295',
          'userDataKey': '435'
        });
      } else if (option.uri === 'https://code-academy-backend.herokuapp.com/postpaid') {
        return Promise.resolve({
          'packageName': 'T-postpaid',
          'startDate': '23-01-2017',
          'phone': '+66298728295',
          'userDataKey': '432'
        });
      } else if (option.uri === 'https://code-academy-backend.herokuapp.com/user') {
        return Promise.resolve({
          'name': 'Bobby',
          'age': 65,
          'phone': '+66238728295'
        });
      }
    };
    return rp;
  });
  const lib = require('../src/lib');
  lib.user('c7b1a59ace5').then((data) => {
    expect(data).toMatchObject({
      'code': 200,
      'data': {
        'name': 'Bobby',
        'age': 65,
        'phone': '+66238728295'
      }
    });
  });
});

test('[offline][Fail][mock + expect] /user', () => {
  jest.resetModules();
  jest.mock('request-promise', () => {
    const rp = (option) => {
      if (option.uri === 'https://code-academy-backend.herokuapp.com/prepaid') {
        return Promise.resolve({
          'err': 'user not authenticated'
        });
      } else if (option.uri === 'https://code-academy-backend.herokuapp.com/postpaid') {
        return Promise.resolve({
          'err': 'user not authenticated'
        });
      } else if (option.uri === 'https://code-academy-backend.herokuapp.com/user') {
        return Promise.resolve({
          'err': 'user not authenticated with postpaidprepaid key'
        });
      }
    };
    return rp;
  });
  const lib = require('../src/lib');
  lib.user('c7b1a59ace5XXX').then((data) => {
    expect(data).toMatchObject({
      'code': 400,
      'error': 'ERROR'
    });
  });
});
