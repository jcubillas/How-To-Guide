const fetch = require('node-fetch')

const url = "http://localhost:8000/routes";

module.exports = function () {
    return fetch(url).then(resp => resp.json())
}