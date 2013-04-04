var helpers = require('../helpers');

module.exports = function (data) {
    var lines = data.split('\n');
    var nth = parseInt(lines[1] - 1, 10);

    var word = lines.slice(2).join(' ').split(' ')[nth];
    word = helpers.onlyAlphaNumeric(word);
    return word;
};
