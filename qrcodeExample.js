var QRCode = require('qrcode')


var express = require('express');
var app = express();
	

	app.get('/', function (req, res) {
	    res.writeHead(200, { 'Content-Type': 'text/html' })
		  var jungleBook = "hfds"

		  // QRCode.QRCodeDraw.color.dark = '#d4d4d4';
		  QRCode.toDataURL(jungleBook, function (err, url) {
		    if (err) console.log('error: ' + err)
		    res.end("<!DOCTYPE html/><html><head><title>node-qrcode</title></head><body><img src='" + url + "'/></body></html>")
		  })
	})
 var server = app.listen(3030, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)

  })