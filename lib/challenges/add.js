module.exports = function (data) {
    var lines = data.split('\n');
    var sum = 0;
    var firstNum = parseInt(lines[1], 10);
    var operation = lines[0];

    if (firstNum) {
        sum = firstNum;
        if (operation == '-' && lines.length === 2) {
            sum = -firstNum;
        }
    }

    for (var i = lines.length - 1; i > 1; i--) {
        var num = parseInt(lines[i], 10);

        if (operation == '+') {
            sum += num;
        } else if (operation == '-') {
            sum -= num;
        }
    }

    return sum.toString();
};
