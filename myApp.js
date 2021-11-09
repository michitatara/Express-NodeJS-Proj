require('dotenv')
var express = require('express');
var app = express();
module.exports = app;
console.log('Hello World');

let messageObject = {"message": "Hello json"};
app.get('/json', function(req, res) {
  if (process.env.MESSAGE_STYLE === 'uppercase') {
     var u_=JSON.parse(JSON.stringify(messageObject ));
     u_.message=u_.message.toUpperCase();
     return res.json(u_);
  } else {
      return res.json(messageObject);
  }
});

/*app.get("/json", function(req, res) {
if(process.env.VAR_NAME === "allCaps"){
    response = "Hello json".toUpperCase();
} else{
    response = "Hello json";
}
});
   const response = "Hello json";
   if (process.env.VAR_NAME === "uppercase"){
       res.json({ message: response.toUpperCase() });
   } else{
       res.json({message: response});
   }
});*/

app.use(function middleware(req,res,next){
    req.time = Date().toString();
    console.log(req.time);
    next();
},
function(req,res){
    res.send({time: req.time})
});