test('Get user data success', () => {
  jest.mock('request-promise', () => (opts) => {
    if (opts.uri.includes('/prepaid')) {
      return Promise.resolve({
        packageName: 'T-prepaid',
        startDate: '24-04-2003',
        phone: '+662372362',
        userDataKey: '456'
      });
    }

    if (opts.uri.includes('/postpaid')) {
      return Promise.resolve({
        packageName: 'T-postpaid',
        startDate: '21-01-2013',
        phone: '+662472362',
        userDataKey: '123'
      });
    }
    
    if (opts.uri.includes('/user')) {
      return Promise.resolve({
        name: 'Bobby',
        age: 65,
        phone: '+66238728295'
      });
    }
  }); 
    
  const userdata = require('../src/userdata');

  const case1 = userdata('0c4aac7b1a5','age');
  const case2 = userdata('0c4aac7b1a5','name');
  const case3 = userdata('0c4aac7b1a5','phone');
    
  return Promise.all([case1,case2,case3]).then(([result1,result2,result3]) => {
    expect(result1).toEqual({age: 65});
    expect(result2).toEqual({name: 'Bobby'});
    expect(result3).toEqual({phone: '+66238728295'});
  });
});

test('Get Packages with wrong token', () => {
  jest.resetModules();
  
  jest.mock('request-promise', (opts) => (opts) => {
    if (opts.uri === 'https://code-academy-backend.herokuapp.com/prepaid') {
      return Promise.reject({error: {err: 'user not authenticated'}});
    }
    
    if (opts.uri === 'https://code-academy-backend.herokuapp.com/postpaid') {
      return Promise.reject({error: {err: 'user not authenticated'}});
    }
  }); 
        
  const userdata = require('../src/userdata');
  return userdata('0c4aac7b1a5','age').catch((err) => {
    expect(err.message).toEqual('user not authenticated');
  });
});