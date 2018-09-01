var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser')
var Event = require("./event.js");
var db_connect = require("./connect_db.js");
var multer  = require('multer')
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
  var ame='';
  var storage = multer.diskStorage({
    destination: '../redux/public',
    filename: function (req, file, cb) {
      cb(null, file.fieldname +'-'+Date.now()+'-'+file.originalname)
      ame =file.fieldname +'-'+Date.now()+'-'+file.originalname;
    }
  })

  const upload = multer({
    storage:storage
  }).single('cover_url');

var data = [
    {"name":"John", "city": "Seattle"},
    {"name":"Mike", "city": "Los Angeles"},
    {"name":"Zach", "city": "New Yorkll"}
];
// var XLSX = require('xlsx');
// var wb = XLSX.readFile('sheetjs1.xlsx');
// XLSX.utils.sheet_add_aoa(
//   wb,
//   [
//     ["new data", 1, 2, 3]
//   ], {origin: -1}// data
// );
// XLSX.writeFile('sheetjsnew.xlsx', wb);


/* this line is only needed if you are not adding a script tag reference */
if(typeof XLSX == 'undefined') XLSX = require('xlsx');
var writeStream = fs.createWriteStream("sheetjs1.xlsx");
/* make the worksheet */
var ws = XLSX.utils.sheet_add_aoa(data);

/* add to workbook */
// var wb = XLSX.utils.book_new();
var wb = XLSX.read(writeStream, {type:"array"})
XLSX.utils.book_append_sheet(wb, ws, "People");

/* generate an XLSX file */
XLSX.writeFile(wb, "sheetjs1.xlsx");

  // var XLSX = require('xlsx')

  // ar ws = XLSX.utils.aoa_to_sheet(data);
  // var wb = XLSX.utils.book_new();
  // XLSX.utils.book_append_sheet(wb, ws, "SheetJS");

  // /* generate buffer */
  // var buf = XLSX.write(wb, {type:'buffer', bookType:bookType || "xlsx"});


  // var writeStream = fs.createWriteStream("file.xls");

  // var header="Sl No"+"\t"+" Age"+"\t"+"Name"+"\n";
  // var row1 = "0"+"\t"+" 21"+"\t"+"Rob"+"\n";
  // var row2 = "1"+"\t"+" 22"+"\t"+"bob"+"\n";

  // writeStream.write(header);
  // writeStream.write(row1);
  // writeStream.write(row2);

  // writeStream.close();

  var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)

  })
