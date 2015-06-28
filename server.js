//Handles HTTP request
var express = require('express');
var app = express();
var port = 80;
var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

//Handle JSON
var bodyParser = require('body-parser');
app.use(bodyParser.json());

//Handle the database
var sqlite3	= require('sqlite3').verbose();
var dbName = './awesome.db';
var db = new sqlite3.Database(dbName);
var shipTable = "ships"

app.get('/', function (req, res) {
  res.send('Awesome Hello World!');
});

//app.get('/', function (req, res) {

	//to do
//})

//PUT ip.address.whatever:80/user~~somepayload json
app.get('/ship', function (req, res) {
	var body = req.body;
	console.log(req.body);
	//Creates an SQL command/statement
	var stmt = db.prepare("INSERT OR REPLACE INTO " + shipTable + " (id,red,green,blue,alpha) VALUES (?, ?, ?, ?, ?)");
	stmt.run(body.id, body.red, body.green, body.blue, body.alpha);
	stmt.finalize();

	console.log("Added Ship");
	
	//Test code, displays all users in the console
	db.each("SELECT id, red, green, blue, alpha FROM " + shipTable, function(err, row) {
		console.log(row.id + ": " + row.red + ", " + row.green + ", " + row.blue + ", " + row.alpha);
	});

	res.send(body);
})



