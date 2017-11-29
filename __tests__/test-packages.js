test('Get Packages success', () => {
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
    
  }); 
    
  const packages = require('../src/packages');

  return packages('0c4aac7b1a5').then((result) => {
        
    const expectResult = {
      prepaid: {
        packageName: 'T-prepaid',
        startDate: '24-04-2003',
        phone: '+662372362',
        userDataKey: '456'
      },
      postpaid: {
        packageName: 'T-postpaid',
        startDate: '21-01-2013',
        phone: '+662472362',
        userDataKey: '123'
      },
    };
        
    expect(result).toEqual(expectResult); '';
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
        
  const packages = require('../src/packages');
  return packages('0c4aac7db1a5').catch((err) => {
    expect(err.message).toEqual('user not authenticated');
  });
});