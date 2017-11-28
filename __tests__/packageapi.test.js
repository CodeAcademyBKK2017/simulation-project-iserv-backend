const PackageAPI = require('../src/packageapi');

test('get User Package with correct token', () => {
    return PackageAPI("c7b1a59ace5").then((res) => {
        expect(res).toEqual([{
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
        }]);
    })
});

test('get User Package with incorrect token', () => {
    return PackageAPI("c7b1a59ace5s").then((res) => {
        expect(res).toEqual([{ err: "user not authenticated" }]);
    });
});

test('get User Package without token', () => {
    return PackageAPI(undefined).then((res) => {
        expect(res).toEqual({ error: 'Missing Secret Parameter' });
    });
});