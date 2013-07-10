var express = require('express');

var fs = require('fs');

var filebuf = fs.readFileSync('index.html');
var message = filebuf.toString();

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(message);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
