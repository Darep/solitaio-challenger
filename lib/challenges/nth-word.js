var helpers = require('../helpers');

module.exports = function (data) {
    var nth = parseInt(data[0], 10),
        word = data[1].replace(/\n/g, ' ').split(' ')[nth-1];
    return helpers.onlyAlphaNumeric(word);
};
