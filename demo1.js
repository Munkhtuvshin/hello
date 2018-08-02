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

  app.get('/event', function (req, res) {
    Event
    .find({})
    .limit(10)
    .exec(function(err, events) {
      return res.json(events);  
    });
  })

  app.post('/event', function (req, res) {
    console.log('nemeh')
    Event.create(req.body, (err, event) => {
      console.log(event);
      return res.json(event);
    })
  })

  app.delete('/event/:id', function (req, res) {
    Event
    .findOne({ _id:req.params.id })
    .remove()
    .exec(function(err, event){
      return res.json(req.body);
    });
  })

  app.put('/event/:id', function (req, res) {
    Event.
    findOneAndUpdate( { _id:req.params.id }, { $set: req.body }, 
      function(err, event){
        return res.json(event);
      }
    )
  })

  var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

  })
