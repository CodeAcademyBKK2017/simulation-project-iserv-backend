const lib = require('../src/lib');

test('/auth', () => lib.auth('bob').then((data) => {
  expect(data).toMatchObject({'code': 200,'token': 'c7b1a59ace5'});
}));

test('/auth', () => lib.auth('bo').then((data) => {
  expect(data).toMatchObject({'code': 404,'error': 'user not found'});
}));

test('/packages', () => lib.packages('c7b1a59ace5').then((data) => {
  expect(data).toMatchObject({'code': 200,'prepaid': {'packageName': 'T-prepaid','startDate': '23-01-2008','phone': '+66238728295','userDataKey': '435'},'postpaid': {'packageName': 'T-postpaid','startDate': '23-01-2017','phone': '+66298728295','userDataKey': '432'}});
}));

test('/packages', () => lib.packages('').then((data) => {
  expect(data).toMatchObject({'code': 200});
}));
