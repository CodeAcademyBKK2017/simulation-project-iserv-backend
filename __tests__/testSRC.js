const postpre = require('../src/getPaidAndPost');
const userdata = require('../src/getUserData');
const contructors = require('../service/constructor');
const GlobalParams = new contructors.globalParam();
const URIAUTH = GlobalParams.getLogin()
const urlPre = GlobalParams.getPrepaid();
const urlPost = GlobalParams.getPostpaid();

test('Authenticate Successful',()=>{
    const expectRes = {
        "token": "c7b1a59ace5"
    };
    jest.resetModules()
    jest.mock('request-promise',()=>{
        const rp = () => Promise.resolve("c7b1a59ace5");
        return rp;
    });
    const auth = require('../src/getLoginAPI');
    return auth.getLoginToken(URIAUTH,"bob").then(body=>expect(body).toMatchObject(expectRes))
})

test('Authenticate Faild user not found.',()=>{
    const expectRes ={
        statusCode:404,
        error:"user not found"
    };
    jest.resetModules();
    jest.mock('request-promise',()=>{
        const rp = () => Promise.reject({
            statusCode:404,
            error:"user not found"
        });
        return rp;
    });
    const auth = require('../src/getLoginAPI');
    return auth.getLoginToken(URIAUTH,"joo").then(body=>expect(body).toMatchObject(expectRes))
})

test('GetPrepaid Successful',()=>{
    const expectRes ={
        "packageName": "T-prepaid",
        "startDate": "23-01-2008",
        "phone": "+66238728295",
        "userDataKey": "435"
    };
    jest.resetModules();
    jest.mock('request-promise',()=>{
        const rp = () => Promise.resolve({
            "packageName": "T-prepaid",
            "startDate": "23-01-2008",
            "phone": "+66238728295",
            "userDataKey": "435"
        });
        return rp;
    });
    const prepaid = require('../src/getPrepaid');
    return prepaid.getPrepaid(urlPre,"c7b1a59ace5").then(body=> expect(body).toMatchObject(expectRes))
})

test('GetPrepaid Faild',()=>{
    const expectRes ={
        statusCode:404,
        error:"user not authenticated"
    };
    jest.resetModules();
    jest.mock('request-promise',()=>{
        const rp = () => Promise.reject({
            statusCode:404,
            error:"user not authenticated"
        });
        return rp;
    });
    const prepaid = require('../src/getPrepaid');
    return prepaid.getPrepaid(urlPre,"asdsadasdasdadasd").then(body=> expect(body).toEqual(expectRes))
   
})

test('GetPostpaid Successful',()=>{
    const expectRes ={
        "packageName": "T-postpaid",
        "startDate": "23-01-2017",
        "phone": "+66298728295",
        "userDataKey": "432"
    };
    jest.resetModules();
    jest.mock('request-promise',()=>{
        const rp = () => Promise.resolve({
            "packageName": "T-postpaid",
            "startDate": "23-01-2017",
            "phone": "+66298728295",
            "userDataKey": "432"
        });
        return rp;
    });
    const postpaid = require('../src/getPostpaid');
    return postpaid.getPostpaid(urlPost,"c7b1a59ace5").then(body=>expect(body).toMatchObject(expectRes))
})

test('GetPostpaid Faild',()=>{
    const expectRes ={
        statusCode:404,
        error:"user not authenticated"
    };
    jest.resetModules();
    jest.mock('request-promise',()=>{
        const rp = () => Promise.reject({
            statusCode:404,
            error:"user not authenticated"
        });
        return rp;
    });
    const postpaid = require('../src/getPostpaid');
    return postpaid.getPostpaid(urlPost,"ijijijijijij").then(body=> expect(body).toMatchObject(expectRes))
    
})

test('GetPostpaidAndPrepaid Successful',()=>{
    const responseFN = (body)=>{
        expect(body).toMatchObject(expectRes)
    }
    postpre.getPrePostpaid("c7b1a59ace5",responseFN)
    const expectRes = {
        "prepaid": {
            "packageName": "T-prepaid",
            "startDate": "23-01-2008",
            "phone": "+66238728295",
            "userDataKey": "435"
        },
        "postpaid": {
            "packageName": "T-postpaid",
            "startDate": "23-01-2017",
            "phone": "+66298728295",
            "userDataKey": "432"
        }
    };
})

test('getUserData Successful',()=>{
    const expectRes = {age:65};
    const responseFN = (body)=>{
        expect(body).toMatchObject(expectRes)
    }
    const result = userdata.getUserData("c7b1a59ace5",responseFN)
})

test('response mix userData is collect',()=>{
    const input = {
        "prepaid": {
            "userDataKey": 435
        },
        "postpaid": {
            "userDataKey": 432
        }
    }
    const FN = (body)=>{
        expect(body).toMatchObject(expectRes)
    }
    const result = userdata.responseFN('age',FN,input);
    const expectRes = {age:65};
    expect(result).toBe(expectRes);
})