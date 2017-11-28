API TASK:

https://code-academy-backend.herokuapp.com
Apis available:
```
POST /login with body { user: "bob"} - this will give u the token
GET /prepaid with header { secret: "user token u got from login"}
POST /postpaid with body { secret: "user token u got from login"}
POST /user with header { secret: "secret u got from combining userDataKey from postpaid + prepaid"}
```

# Task

1. Make GET /auth api which will fetch login token from the server in code-academy-backend

/auth API should be a GET api which takes username as query parameter
and should hit the backend server to get the token

response should be {token: "token from server"}


2. Make POST /packages api which will fetch prepaid and postpaid data together from server in code-academy-backend

response should be {
  prepaid: {data in json format from server},
  postpaid: {data in json format from server}
}

3. Make GET /userdata?part='age' api which will fetch user data from backend server

  part can be 'age','name','phone' if anything else return 400 error
  part should be present in the request otherwise return 400 error

Logic:
 - First hit postpaid and prepaid with the api login token
 - get userDataKey from postpaid and prepaid
 - hit the POST /user api on the server with headers {secret: postpaidUserDataKey + prepaidUserDataKey}

response should be {
  age: {data in string format from server}
}
