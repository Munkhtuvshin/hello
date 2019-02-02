var express = require('express');
var app = express();
var admin = require('firebase-admin');

var serviceAccount = require("./adminSdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fir-examle-c2e5c.firebaseio.com"
});

app.get('/demo', function (req, res) {
    // console.log('demooo')
    // The topic name can be optionally prefixed with "/topics/".
  var registrationToken ="e3fA-HJ9I0E:APA91bFYbVLoWsfMhgac5ddxnYIb2QCZzMosNvaVAWqsdW_gfQDk8I5dug7fxWk1L6ImDYOoBRUuS1MurLNKQezqoL6Hm2rWZu7Myyp_6pNNUsespdswt3RhQoSfeBxhCKE6dHIjNTrM"
// See documentation on defining a message payload.
var message = {
  data: {
    score: '850',
    time: '2:45'
  },
  token: registrationToken
};

admin.messaging().send(message)
  .then((response) => {
    // Response is a message ID string.
    console.log('Successfully sent message:', response);
  })
  .catch((error) => {
    console.log('Error sending message:', error);
  });
})

var server = app.listen(9000, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log("Example app listening at http://%s:%s", host, port)
})
