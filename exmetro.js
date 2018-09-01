var fetch = require('node-fetch-json');
var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser')

// var Event = require("./event.js");
// var db_connect = require("./connect_db.js");
// var multer  = require('multer')
//var upload = multer({ dest: 'upload/'})
  
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
  // var ame='';
  // var storage = multer.diskStorage({
  //   destination: '../redux/public',
  //   filename: function (req, file, cb) {
  //     cb(null, file.fieldname +'-'+Date.now()+'-'+file.originalname)
  //     ame =file.fieldname +'-'+Date.now()+'-'+file.originalname;
  //   }
  // })

  // const upload = multer({
  //   storage:storage
  // }).single('cover_url');

// var writeStream = fs.createWriteStream("sheetjs1.xlsx");
XLSX = require('xlsx');
  var wb = XLSX.readFile('write.xlsx');
  var ws = wb.Sheets[wb.SheetNames[0]];
  XLSX.utils.sheet_add_aoa(ws, [
    [ 1, 2, 3]
  ], {origin: -1});
XLSX.writeFile(wb, 'new.xlsx');

  var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)

  })
