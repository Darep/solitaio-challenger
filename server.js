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
        var answerer, requestData, result,
            challenge = parseChallenge(requestBody);

        if (challenge === undefined) {
            response.end('I don\'t understand :(');
            return;
        }

        requestData = requestBody.split('\n').slice(1);
        result = require('./lib/challenges/' + challenge.toString())(requestData);

        if (result === undefined) {
            response.end('I don\'t understand :(');
            return;
        }

        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end( result.toString() );
    });
});
