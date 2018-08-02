var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
var db_connect = require("./connect_db.js");

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
var id=2;

var event_id_generator = 2

var event_list=[
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


  var db = mongoose.connection;
  db.collection('event_list').insertOne(event_list[0]).then(response);

  db.collection('event_list').find().toArray(function (err, result) {
    if (err) throw err

    console.log(result)
  })



app.get('/listUsers', function (req, res) {
    res.send( data );
})

function getNextEventId() {
  event_id_generator ++
  return event_id_generator
}

function addNewEvent(event) {
  event_list.push(event)
}

app.post('/event', function (req, res) {
  console.log('+++++++++++++++++++Nemeh+++++++++++++++');//
 
  let next_event_id = getNextEventId()

  var newEvent = Object.assign(req.body, {
    id: next_event_id
  })

  addNewEvent(newEvent)

  return res.json({
    code: 0, //0 amjilttai 1 aldaa 2
    event: newEvent,
  })
  //res.send(''+index);
})

app.delete('/event/:id', function (req, res) {
  console.log('-------------------Ustgah----------------------');
  console.log('req.params.id: '+req.params.id);
  var index;
  for (var i = event_list.length - 1; i >= 0; i--) {
    if( event_list[i].id ==req.params.id ){
      console.log('event_list[i].id: '+event_list[i].id);
      index=i;
      console.log('index:'+index);
    }
  }
  console.log('ustsan event_list');
  console.log(event_list[index]);
  event_list.splice(index, 1);
  console.log('event_list: ');
  console.log(event_list);
  res.send(req.body);
})

app.get('/event', function (req, res) {
  console.log('-------getAllEvent-----------');
  console.log(event_list);
  console.log('-------endGetAllEvent-----------');
  res.send(event_list);
})

app.put('/event/:id', function (req, res) {
  console.log('---------------------put---------------------');
  console.log(req.params.id);
  console.log(req.body);
  console.log('---------------------endput---------------------');
  for (var i = event_list.length - 1; i >= 0; i--) {
    if( event_list[i].id ==req.params.id ){
      index=i;
    }
  }
  event_list[index]=req.body;

  return res.json({
    code: 0, //0 amjilttai 1 aldaa 2
    error: null,
  })
  
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})


// var MongoClient = require('mongodb').MongoClient

// MongoClient.connect('mongodb://localhost:27017/demo', function (err, client) {
//   if (err) throw err

//   var db = client.db('demo')
//   console.log(event_list[0]);
// })
