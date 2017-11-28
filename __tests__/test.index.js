const op = require('../operations');

test('Success /auth',()=>{
    const request = {query: {user: 'bob'}};
    const reply = jest.fn();
    return op.genereateToken(request,reply).then( ()=>{
        expect(reply).toHaveBeenCalled()
    })
})
test('Success /packages',()=>{
    const request = {query: {user: 'bob'}};
    const reply = jest.fn();
    return op.genereateToken(request,reply).then( ()=>{
        expect(reply).toHaveBeenCalled()
    })
})

test('Fail /auth',()=>{
    const request = {query: {user: 'xxxx'}};
    const reply = jest.fn();
    return op.genereateToken(request,reply).catch( ()=>{
        expect(reply).toHaveBeenCalled()
    })
})