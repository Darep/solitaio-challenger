var http = require('http');
var parseChallenge = require('./lib/challenge-parser');

module.exports = http.Server(function (request, response) {

    var requestBody = '';

    // Get all the data
    request.on('data', function (data) {
        requestBody += data;
        if (requestBody.length > 1e6) {
            requestBody = '';
            response.writeHead(413, {'Content-Type': 'text/plain'});
            request.connection.destroy();
        }
    });

    request.on('end', function() {
        var challenge = parseChallenge(requestBody);

        if (!challenge) {
            response.end('I don\'t understand :(');
            return;
        }

        var answerer = require('./lib/challenges/' + challenge + '.js');
        var result = answerer(requestBody);

        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end(result);
    });
});
