const rp = require('request-promise');

// ----------

const srcAuth = require('../src/authentication');
const srcPackages = require('../src/packages');

// ----------

test('Src: request get auth success 01', () => {
  const username = 'bob';
  return srcAuth.requestAuth(username).then((data) => {
    expect(data.token).toBe('c7b1a59ace5');
  });
});

test('Src: request get auth failure 01', () => {
  const username = '1234';
  return srcAuth.requestAuth(username).catch((err) => {
	  expect(err).toBe(srcAuth.NOT_FOUND_USERNAME);
  });
});

// ----------

test('Src: request post packages success 01', () => {
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
  const token = 'XXX';
  return srcPackages.requestAllPackages(token).catch((err) => {
    expect(err).toBe(srcPackages.WRONG_TOKEN);
  });
});
