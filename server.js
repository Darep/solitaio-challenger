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

        var answerer = require('./lib/challenges/' + challenge);
        var result = answerer(requestBody);

        if (result === undefined) {
            response.end('I don\'t understand :(');
            return;
        }

        result = result.toString();

        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end(result);
    });
});
