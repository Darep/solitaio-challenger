var port = process.env.PORT || 1234;
var http = require('http');

var server = require('./server');

server.listen(port);
console.log('Listening on ' + port);
