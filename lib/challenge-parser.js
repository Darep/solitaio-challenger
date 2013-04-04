var S = require('string');

module.exports = function (data) {
    var firstLine = data.split('\n')[0];

    if (data == 'ping') {
        return 'ping';
    } else if (firstLine == 'say-hello') {
        return 'say-hello';
    } else if (firstLine == '+' || firstLine == '-') {
        return 'add';
    } else if (firstLine == 'fizzbuzz') {
        return 'fizzbuzz';
    } else if (firstLine == 'palindrome?') {
        return 'palindrome';
    }
};
