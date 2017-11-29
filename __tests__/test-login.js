test('Login', () => {
  jest.mock('request-promise', () => () => Promise.resolve('0c4aac7b1a5'));

  const login = require('../src/login');
  return login('bob').then((result) => {
    expect(result).toEqual({token: '0c4aac7b1a5'});
  });
});

test('Login fail', () => {
  jest.resetModules();
  jest.mock('request-promise', () => () => Promise.reject({error: {err: 'user not found'}}));

  const login = require('../src/login');
  return login('bobdf').catch((err) => {
    expect(err.message).toEqual('user not found');
  });
  
});