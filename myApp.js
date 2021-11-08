var express = require('express');
var app = express();
module.exports = app;
app.get('/', (request, response) => {
    response.send('Hello World!');
});
