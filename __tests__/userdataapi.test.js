const UserDataAPI = require('../src/userdataapi');

test('get User Data with correct token', () => {
    return UserDataAPI("c7b1a59ace5").then((res) => {
        expect(res).toEqual({ "age": 65, "name": "Bobby", "phone": "+66238728295" });
    });
});

test('get User Data with incorrect token', () => {
    return UserDataAPI("c7b1a59ace5s").then((res) => {
        expect(res).toEqual({ err: "user not authenticated" });
    });
});

test('get User Data without token', () => {
    return UserDataAPI(undefined).then((res) => {
        expect(res).toEqual({ error: 'Missing Secret Parameter' });
    });
});