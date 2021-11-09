require('dotenv')
var express = require('express');
var app = express();
module.exports = app;
console.log('Hello World');

app.get("/json", function(req, res) {
if(process.env.MESAGE_STYLE === "uppercase"){
    res.json(
        {"message":"HELLO JSON"}       
    )
} else{
    res.json(
        {"message": "Hello json"}
    )
}
});
  
app.use(function middleware(req,res,next){
    req.time = Date().toString();
    console.log(req.time);
    next();
},
function(req,res){
    res.send({time: req.time})
});