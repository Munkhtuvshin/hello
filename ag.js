var express = require('express');
var app = express();

var Agenda = require('agenda');
module.exports = function () {
  var agenda = new Agenda();

  agenda.define('download info', function(job, done) {
     console.info("doing stuff!");
     agenda.stop(() => process.exit(0));
  });


  agenda.on('ready', function() {
    agenda.every('10 seconds', 'download info');
    agenda.start();
  });

};
function failGracefully() {
  console.log('Something is gonna blow up.');
  agenda.stop(() => process.exit(0));
}

process.on('SIGTERM', failGracefully);
process.on('SIGINT', failGracefully);

var server = app.listen(9990, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port)
})