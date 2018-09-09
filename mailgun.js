var api_key = 'e15ed77515c84cb1fe58fee9f1de5a15-f45b080f-db590af8';
var domain = 'sandboxf5cb22da21034e39adb9c5e9df098dbc.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
var data = {
  from: 'Bat <monho@mailgun.org>',
  to: 'B150920009@mymust.net',
  subject: 'Hello world',
  text: 'Testing ghj ss!'
};
 
mailgun.messages().send(data, function (error, body) {
  if(error){ console.log(error); }
  console.log(body);
});

// curl -s --user 'api:dd2cf2a7293deee99d091893e36b1a2c-7efe8d73-25123d99' \
//     https://api.mailgun.net/v3/sandbox7786c7476a844ced8a11317268d73894.mailgun.org/messages \
//     -F from='Excited User <monho@s4.mailgun.org>' \
//     -F to=monhood34@gmail.com \
//     -F subject='Helo' \
//     -F text='Testing some Mailgun awesomeness!'