
var up = require('up');
var http = require('http');

var port = process.env.PORT || 1234;
var master = http.Server().listen(port);

var srv = up(master, __dirname + '/server', {
    numWorkers: 2
});

process.on('SIGUSR2', function () {
    srv.reload();
});
