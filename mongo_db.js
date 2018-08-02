// var express = require('express');
// var app = express();
// var fs = require("fs");
var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/demo', function (err, client) {
  if (err) throw err

  var db = client.db('demo')
  
  db.collection('demoCollection').find().toArray(function (err, result) {
    if (err) throw err

    console.log(result)
  })
})

// var server = app.listen(8081, function () {

//   var host = server.address().address
//   var port = server.address().port

//   console.log("Example app listening at http://%s:%s", host, port)

// })
