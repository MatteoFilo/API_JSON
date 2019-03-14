var express = require("express");
var app = express();
var path = require('path');
var bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", function(req, res) {
    res.send('TEXT');
});

//app.use(bodyParser.text({type: 'text/plain'}))
//app.post("/", function(req,res){
//    console.log("Ricevuto una richiesta POST");
//   var password = req.body;
//  console.log("password is "+ password);
//  res.end("yes " + req.body);
//});

app.use(bodyParser.json())
app.post("/", function(req,res){
  //console.log(req.body.user)
  //var elem = "password"
  
  req.body.queryResult.fulfillmentMessages.payload.user = 'CIAO MATTEO';
  
  //var pass = req.body.password + 1;
  //delete req.body.fulfillmentMessages.payload.password;
  //req.body.Elemento = pass;

  //res.json(req.body.queryResult.fulfillmentMessages.payload.user + " " + req.body.queryResult.fulfillmentMessages.payload.password + 1 );
    res.json(req.body);
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Listening on " + port);
});




