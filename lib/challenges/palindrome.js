var S = require('string');
var helpers = require('../helpers');

var checkPalindrome = function(str) {
    return str == str.split('').reverse().join('');
};

module.exports = function (data) {
    var lines = data.split('\n');
    data = helpers.onlyAlphaNumeric(lines[1]).toLowerCase();

    if (checkPalindrome(data)) {
        return 'true';
    } else {
        return 'false';
    }
};
