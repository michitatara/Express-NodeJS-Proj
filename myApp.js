require('dotenv')
var express = require('express');
var app = express();
module.exports = app;
console.log('Hello World');
app.get("/json", function(req, res) {
if(process.env.VAR_NAME === "allCaps"){
    response = "Hello json".toUpperCase();
} else{
    response = "Hello json";
}
   /*const response = "Hello json";
   if (process.env.VAR_NAME === "uppercase"){
       res.json({ message: response.toUpperCase() });
   } else{
       res.json({message: response});
   }
});*/

app.use("/public",express.static(__dirname + "/public"))
