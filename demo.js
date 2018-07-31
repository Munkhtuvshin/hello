var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

var data=[
   user1 = {
    title : "mahesh",
	  cover_url : '',
    coordinate:{
        lat:47.78963221880257,
        lng:107.38140106201172,  
      },
	  start_at:'2018-08-08',
    end_at:'2018-08-08',
	  id: 0
   },
   user2 = {
    title : "suresh",
	  cover_url : '',
    coordinate:{
        lat:47.78963221880257,
        lng:107.38140106201172,  
      },
	  start_at:'2015-08-07',
    end_at:'2015-08-09',
	  id: 1
   },
];

app.use(function (req, res, next){
 res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
 res.setHeader('Access-Control-Allow-Methods', 'HEAD, GET, POST, OPTIONS, PUT, PATCH, DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization');
 res.setHeader('Access-Control-Allow-Credentials', true);
 next();
})

app.get('/listUsers', function (req, res) {
    res.send( data );
})

app.post('/event', function (req, res) {
  data.push(req.body);
  console.log(req.body.id);
  res.send(req.body);
})

app.delete('/event/:id', function (req, res) {
  data = data.splice(req.params.id, 1);
  console.log(data);
  console.log(req.params.id);
  res.send(req.body);
})

app.get('/event', function (req, res) {
  res.send(data);
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})

