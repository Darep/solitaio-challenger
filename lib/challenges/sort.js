var intComp = function (a, b) {
    a = parseInt(a, 10);
    b = parseInt(b, 10);
    return (a-b);
};

module.exports = function (numbers) {
    return numbers.sort(intComp).join(', ');
};
