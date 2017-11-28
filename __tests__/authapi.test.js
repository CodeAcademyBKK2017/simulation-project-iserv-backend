const AuthAPI = require('../src/authapi');


test('get Token with user = bob', () => {
    return AuthAPI('bob').then((result) => {
        expect(result).toEqual("c7b1a59ace5");
    });
});

test('get Token with user = test', () => {
    return AuthAPI('test').then((result) => {
            expect(result).toEqual('[StatusCodeError: 404 - { err: user not found }']);
    });
});