module.exports = {
    firstLine: function (text) {
        var lines = text.split('\n');
        if (lines && lines.length >= 1) {
            return lines[0];
        }
    },
    onlyAlphaNumeric: function (text) {
        return text.replace(/\W/g, '');
    }
};
