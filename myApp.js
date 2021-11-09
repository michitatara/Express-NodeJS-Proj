var express = require('express');
var app = express();
module.exports = app;
console.log('Hello World');
app.get("/json", (req, res) => {
    res.json({
      message: "Hello json"
    });
});

app.use("/public",express.static(__dirname + "/public"))
