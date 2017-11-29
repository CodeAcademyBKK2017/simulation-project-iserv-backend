const server = require('../src/lib');
test('function success login',()=>{
    const username = 'bob';
    jest.resetModules();
    jest.mock('request-promise', () => {
         const rp = (option) => Promise.resolve('c7b1a59ace5');
         return rp;
    });
    server.getLogin(username).then((data)=>{
        expect(data.token).toBe('c7b1a59ace5');
    })
});
test('function success packages',()=>{
    const token = 'c7b1a59ace5';
    jest.mock('request-promise', () => {
        const rp = (option) => Promise.resolve([
            {
                "prepaid": {
                    "packageName": "T-prepaid",
                    "startDate": "23-01-2008",
                    "phone": "+66238728295",
                    "userDataKey": "435"
                }
            },
            {
                "postpaid": {
                    "packageName": "T-postpaid",
                    "startDate": "23-01-2017",
                    "phone": "+66298728295",
                    "userDataKey": "432"
                }
            }
        ]);
        return rp;
    });
    const prepaid = server.prepaid(token).then((data)=>{
        return data;
    });
    const postpaid = server.postpaid(token).then((data)=>{
        return data;
    });
    const result = [
        {
            "prepaid": {
                "packageName": "T-prepaid",
                "startDate": "23-01-2008",
                "phone": "+66238728295",
                "userDataKey": "435"
            }
        },
        {
            "postpaid": {
                "packageName": "T-postpaid",
                "startDate": "23-01-2017",
                "phone": "+66298728295",
                "userDataKey": "432"
            }
        }
    ];
    Promise.all([prepaid,postpaid]).then(val=>{
        expect(val).toEqual(result);
    });
});
