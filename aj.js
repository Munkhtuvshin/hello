var Agenda = require('agenda')

const mongoConnectionString = 'mongodb://127.0.0.1/demo';

const agenda = new Agenda({db: {address: mongoConnectionString}});

agenda.define('delete old users', function(job, done){
  console.log('hi');
  done();
});

(async function() { // IIFE to give access to async/await
  await agenda.start();                 

  await agenda.schedule(new Date(Date.now() + 4000), 'delete old users');
  console.log('hooe');

  // Alternatively, you could also do:
  // await agenda.every('*/1 * * * *', 'delete old users');
})();

// function failGracefully() {
//   console.log('Something is gonna blow up.');
//   agenda.stop();
// }

// process.on('SIGTERM', failGracefully);
// process.on('SIGINT', failGracefully);