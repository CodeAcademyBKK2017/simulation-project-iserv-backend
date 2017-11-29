const requestPromise = require('request-promise');

const host = 'https://code-academy-backend.herokuapp.com';

const defaultOptions = {
  json: true
};

module.exports = {
  get: (url, options) => {
    const newOptions = {
      uri: `${host}${url}`,
      method: 'GET'
    };
  
    return requestPromise({ ...defaultOptions, ...newOptions, ...options });
  },
  post: (url, options) => {
    const newOptions = {
      uri: `${host}${url}`,
      method: 'POST'
    };
  
    return requestPromise({ ...defaultOptions, ...newOptions, ...options });     
  }
};