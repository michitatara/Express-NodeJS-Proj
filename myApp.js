require('dotenv')
var express = require('express');
var app = express();
module.exports = app;
console.log('Hello World');
app.get("/json", (req, res) => {
    res.json({
      message: "Hello json"
    });
});
if (process.env.VAR_NAME === "allCaps"){
    response = "Hello json".toUpperCase();
} else {
    response = "Hello json";
}

app.use("/public",express.static(__dirname + "/public"))
