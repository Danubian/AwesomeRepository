var express = require('express');
var app = express();
var port = 80;

app.get('/', function (req, res) {
  res.send('Awesome Hello World!');
});

var server = app.listen(port, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});

