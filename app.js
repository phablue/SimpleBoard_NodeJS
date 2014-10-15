var ejs = require('ejs');
var fs = require('fs');
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var client = mysql.createConnection({
  user: 'root';
  password: 'root';
  database: 'Company';
});

var app = express();

app.use(app.Router());
app.use(bodyParser());

http.createServer(app).listen(52273, function () {
  console.log("Server Running at http://127.0.0.1:52273");
});