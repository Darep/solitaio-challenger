module.exports = function (data) {
    var lines = data.split('\n');
    var n = parseInt(lines[1], 10);
    var text = lines[2];

    return rot(n, text);
};

function rot(n, s) {
    return s.replace(/[a-zA-Z]/g,
        function (c) {
            return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+n)?c:c-(n*2));
        }
    );
}
