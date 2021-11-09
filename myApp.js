require('dotenv')
var express = require('express');
var app = express();
module.exports = app;
console.log('Hello World');
app.get("/json", function(req, res) {
   const response = "Hello json";
   if (process.env.MESSAGE_STYLE === "uppercase"){
       res.json({ message: response.toUpperCase() });
   } else{
       res.json({message: response});
   }
});

app.use("/public",express.static(__dirname + "/public"))
