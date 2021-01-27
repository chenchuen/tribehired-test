const defaultConfig = require('../config/constants.js');
const axios = require('axios');

const getRequest = (path) => {
    return axios.get(defaultConfig.apiUrl + "/" + path)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error);
        });
}

module.exports = getRequest;