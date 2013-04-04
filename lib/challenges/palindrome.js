var S = require('string');

var checkPalindrome = function(str) {
    return str == str.split('').reverse().join('');
};

module.exports = function (data) {
    var lines = data.split('\n');
    data = lines[1].replace(/\W/g, '').toLowerCase();

    if (checkPalindrome(data)) {
        return 'true';
    } else {
        return 'false';
    }
};
