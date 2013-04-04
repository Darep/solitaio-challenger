module.exports = function (data) {
    var firstLine = data.split('\n')[0];

    switch (firstLine) {
        case 'ping':
        case 'say-hello':
        case 'fizzbuzz':
        case 'fibonacci':
        case 'nth-word':
        case 'sort':
            return firstLine;

        case '+':
            return 'add';

        case '-':
            return 'deduct';

        case 'palindrome?':
            return 'palindrome';

        case 'caesar-cipher':
            return 'caesar';

        case 'iban-checksum':
            return 'iban';

        default:
            return undefined;
    }
};
