module.exports = function (data) {
    var lines = data.split('\n');
    var sum = parseInt(lines[1], 10);

    for (var i = lines.length - 1; i > 1; i--) {
        var num = parseInt(lines[i], 10);

        if (lines[0] == '+') {
            sum += num;
        } else if (lines[0] == '-') {
            sum -= num;
        }
    }

    return sum.toString();
};
