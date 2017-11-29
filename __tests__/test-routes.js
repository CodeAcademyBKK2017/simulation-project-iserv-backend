const login = require ('../src/getLogin');
const postpaid = require ('../src/postpaid');
const prepaid = require ('../src/prepaid');
test('login',()=>{
    const user = 'bob';
    jest.resetModules();
    jest.mock('request-promise', () => {
         const rp = (option) => Promise.resolve('c7b1a59ace5');
         return rp;
    });
    login.getLogin(user).then((data)=>{
        expect(data.token).toBe('c7b1a59ace5');
    })
});
test('postpaid',()=>{
    const token = 'c7b1a59ace5';
    jest.resetModules();
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
    const p1 = prepaid.prepaid(token).then((data)=>{
        return data;
    });
    const p2 = postpaid.postpaid(token).then((data)=>{
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
    ]
    Promise.all([p1,p2]).then(val=>{
        expect(val).toEqual(result);
    })
})
