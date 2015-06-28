//Handles HTTP request
var express = require('express');
var app = express();
var port = 80;
var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

//Hanlde JSON
var bodyParser = require('body-parser');
app.use(bodyParser.json());

//Handle the database
var sqlite3	= require('sqlite3').verbose();
var dbName = './awesome.db';
var db = new sqlite3.Database(dbName);

app.get('/', function (req, res) {
  res.send('Awesome Hello World!');
});

//app.get('/', function (req, res) {

	//to do
//})

//PUT ip.address.whatever:80/user~~somepayload json
app.put('/user', function (req, res) {
	res.send(req);
})



