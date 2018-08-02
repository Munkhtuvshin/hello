var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
var Event = require("./event.js");
var db_connect = require("./connect_db.js");

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(function (req, res, next){
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'HEAD, GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
})
  
  //var silence = new Event({ name: 'Silence' });
  Event.create({
    title : "mahesh",
    cover_url : '',
    coordinate:{
        lat:47.78963221880257,
        lng:107.38140106201172,  
      },
    start_at:'2018-08-08',
    end_at:'2018-08-08',
  }, (err, silence) => {
    console.log(silence);
  })






var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
