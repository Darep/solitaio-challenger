var S = require('string');
var helpers = require('../helpers');

var checkPalindrome = function(str) {
    return str == str.split('').reverse().join('');
};

module.exports = function (lines) {
    data = helpers.onlyAlphaNumeric(lines[0]).toLowerCase();

    if (checkPalindrome(data)) {
        return 'true';
    } else {
        return 'false';
    }
};
