module.exports = function (body) {
    var lines = body.split('\n');
    return 'Hello ' + lines.slice(1).join('\n');
};
