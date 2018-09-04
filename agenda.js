var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser')

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	extended: true
})); 
app.use(express.static('public'))
app.use(function (req, res, next){
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
	res.setHeader('Access-Control-Allow-Methods', 'HEAD, GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization, multipart/form-data, application/json');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
})

var api_key = 'dd2cf2a7293deee99d091893e36b1a2c-7efe8d73-25123d99';
var domain = 'sandbox7786c7476a844ced8a11317268d73894.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
var Agenda = require('agenda')



 
var data = {
  from: 'Bat <B150920009@mymust.net>',
  to: 'monhood34@gmail.com',
  subject: 'Hello world',
  text: 'MynameisBold'
};
 

const mongoConnectionString = 'mongodb://127.0.0.1/agenda';
 
const agenda = new Agenda();

agenda.define('ds', function(job, done) {
	console.log('hellmc,x,,x,x,x');
	done();
});

async function hh() { // IIFE to give access to async/await
	console.log('one minute start');
  	await agenda.every('2 seconds', 'ds');

  	await agenda.start();
  	console.log('end ')
  // await agenda.every('*/1 * * * *', 'deleteusers');
}

var server = app.listen(9000, function () {
	var host = server.address().address;
	var port = server.address().port;
	hh();	
	console.log("Example app listening at http://%s:%s", host, port)
})
