var port = process.env.PORT || 1234;
var server = require('http').Server().listen(port);
var up = require('up');

up(server, __dirname + '/server');
