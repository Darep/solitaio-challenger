var helpers = require('../helpers');

module.exports = function (data) {
    var nth = parseInt(data[0], 10),
        text = data.slice(1).join(' '),
        words = text.split(' '),
        word = words[nth-1];

    if (word === undefined) {
        return '';
    }

    return helpers.onlyAlphaNumeric(word);
};
