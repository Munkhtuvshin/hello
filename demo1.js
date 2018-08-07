var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
var Event = require("./event.js");
var db_connect = require("./connect_db.js");
var multer  = require('multer')
//var upload = multer({ dest: 'upload/'})

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
  var ame='';
  var storage = multer.diskStorage({
    destination: '../redux/public',
    filename: function (req, file, cb) {
      var filename=file.fieldname + '-' + file.originalname+Date.now();
      cb(null, file.fieldname +'-'+Date.now()+'-'+file.originalname)
      ame =file.fieldname +'-'+Date.now()+'-'+file.originalname;
    }
  })

  const upload = multer({
    storage:storage
  }).single('cover_url');

  app.get('/event', function (req, res) {
    Event
    .find({})
    .limit(10)
    .exec(function(err, events) {
      return res.json(events);  
    });
  })

  app.post('/event',upload, function (req, res) {
    Event.create( {title: req.body.title, start_at: req.body.start_at, end_at: req.body.end_at, coordinate:{ lat: req.body.lat, lng: req.body.lng }, cover_url: ame }, (err, event) => {
      return event;
    })
    return res.json(req.body);
  })


  app.delete('/event/:id', function (req, res) {
    Event
    .findOne({ _id:req.params.id })
    .remove()
    .exec(function(err, event){
      return res.json(req.body);
    });
  })

  app.put('/event/:id',upload, function (req, res) {
    Event.
    findOneAndUpdate( { _id:req.params.id }, { $set: {title: req.body.title, start_at: req.body.start_at, end_at: req.body.end_at, coordinate:{ lat: req.body.lat, lng: req.body.lng },
                       cover_url: ame } }, 
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
