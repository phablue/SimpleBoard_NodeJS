var fs = require('fs');
var ejs = require('ejs');
var mysql = require('mysql');
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

var dir = __dirname + '/view/';

var client = mysql.createConnection({
  user: 'root',
  password: 'root',
  database: 'Company'
});

var app = express();

app.use(express.Router());
app.use(bodyParser());

http.createServer(app).listen(52273, function () {
  console.log('Server Running at http://127.0.0.1:52273');
});

app.get('/', function (req, res) {
  fs.readFile(dir+'index.html', 'utf8', function (err, data) {
    if (err) throw err;
    client.query('select * from products', function (err, result) {
      res.send(ejs.render(data, {data: result}));
    });
  });
});
