var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser')
app.use( bodyParser.json() );  


	app.post('/he', function (req, res) {
	  var data = '';

	  req.on('data', function (chunk) {
	    data += chunk;
	  });

	  req.on('end', function () {
	    console.log('File uploaded');
	    res.writeHead(200);
	    res.end();
	  });
	})

  var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

  })