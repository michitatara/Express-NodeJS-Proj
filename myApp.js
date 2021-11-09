require('dotenv')
var express = require('express');
var app = express();
module.exports = app;
console.log('Hello World');

/*app.get("/json", function(req, res) {
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
  
app.use(function(req,res,next){
    console.log(req.method + " "+ req.path+ "-" + req.ip);
    next();
});*/

function getTheCurrentTimeString(){
    return new Date().toString();
}
app.get("/now", function(req,res,next) {
    req.time = getTheCurrentTimeString();
    next();
}, function(req,res){
    res.json({time: req.time});
})

