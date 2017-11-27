const lib = require('../lib');

test('/auth', () => lib.auth('bob').then((data) => {
  expect(data).toMatchObject({'code': 200,'token': 'c7b1a59ace5'});
}));

test('/auth', () => lib.auth('').then((data) => {
  expect(data).toMatchObject({'code': 404,'error': 'user not found'});
}));
