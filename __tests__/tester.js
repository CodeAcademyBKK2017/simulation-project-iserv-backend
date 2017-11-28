const login = require('../src/login');
const packages = require('../src/packages');

test('test Login and get Token !!!', () => {
	login.getToken('bob').then(res => {
		// console.log('1:',res);
		expect({token: `${res}`}).toEqual({token: "c7b1a59ace5"});
	});
});

test('test packages !!!', () => {
	packages.postPrepaidPostpaid('c7b1a59ace5').then(res => {
		// console.log('2:',res);
		expect(res).toEqual({
			prepaid: {
				packageName: "T-prepaid",
				startDate: "23-01-2008",
				phone: "+66238728295",
				userDataKey: "435"
			},
			postpaid: {
				packageName: "T-postpaid",
				startDate: "23-01-2017",
				phone: "+66298728295",
				userDataKey: "432"
			}
		  });
	})
	
});