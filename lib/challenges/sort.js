module.exports = function (data) {
    var lines = data.split('\n').slice(1);
    return lines.sort(intComp).join(', ');
};

function intComp(a, b) {
    a = parseInt(a, 10);
    b = parseInt(b, 10);
    return (a-b);
}
