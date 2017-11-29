test('Src: request get auth success 01', () => {
  // prepare request mock of backend
  jest.resetModules();
  jest.mock('request-promise', () => {
	  const rp = (options) => Promise.resolve('c7b1a59ace5');
	  return rp;
  });
  // ~~~ require('request-promise')
  // call function require() to run then get function of rp()

  // import class that use request (request inside it will be replaced with mock)
  const srcAuth = require('../src/authentication');

  // start test with mock
  const username = 'bob';
  return srcAuth.requestAuth(username).then((data) => {
    expect(data.token).toBe('c7b1a59ace5');
  });
});

test('Src: request get auth failure 01', () => {
  // prepare request mock of backend
  jest.resetModules();
  jest.mock('request-promise', () => {
    const rp = (options) => Promise.reject('some error from backend');
    return rp;
  });
  
  // import class that use request (request inside it will be replaced with mock)
  const srcAuth = require('../src/authentication');
  
  // start test with mock
  const username = '1234';
  return srcAuth.requestAuth(username).catch((err) => {
	  expect(err).toBe(srcAuth.NOT_FOUND_USERNAME);
  });
});

// ----------

test('Src: request post packages success 01', () => {
  // prepare request mock of backend
  jest.resetModules();
  jest.mock('request-promise', () => {
    const rp = (options) => {
      if (options.uri === 'https://code-academy-backend.herokuapp.com/prepaid') {
        const result = {
          packageName: 'T-prepaid',
          startDate: '23-01-2008',
          phone: '+66238728295',
          userDataKey: '435'
        };
        return Promise.resolve(result);
      } else if (options.uri === 'https://code-academy-backend.herokuapp.com/postpaid') {
        const result = {
          packageName: 'T-postpaid',
          startDate: '23-01-2017',
          phone: '+66298728295',
          userDataKey: '432'
        };
        return Promise.resolve(result);
      }
    };
    return rp;
  });
	
  // import class that use request (request inside it will be replaced with mock)
  const srcPackages = require('../src/packages');
	
  // start test with mock
  const expectedValue = {
    prepaid: {
	  packageName: 'T-prepaid',
	  startDate: '23-01-2008',
	  phone: '+66238728295',
	  userDataKey: '435'
    },
    postpaid: {
	  packageName: 'T-postpaid',
	  startDate: '23-01-2017',
	  phone: '+66298728295',
	  userDataKey: '432'
    }
  };
  const token = 'c7b1a59ace5';
  return srcPackages.requestAllPackages(token).then((data) => {
    expect(data).toEqual(expectedValue);
  });
});
  
test('Src: request post packages failure 01', () => {
  // prepare request mock of backend
  jest.resetModules();
  jest.mock('request-promise', () => {
    const rp = (options) => {
      if (options.uri.includes('/prepaid')) {
        return Promise.reject('some error from backend');
      } else if (options.uri === 'https://code-academy-backend.herokuapp.com/postpaid') {
        return Promise.reject('some error from backend');
      }
    };
    return rp;
  });
	  
  // import class that use request (request inside it will be replaced with mock)
  const srcPackages = require('../src/packages');
	  
  // start test with mock
  const token = 'XXX';
  return srcPackages.requestAllPackages(token).catch((err) => {
    expect(err).toBe(srcPackages.WRONG_TOKEN);
  });
});
