module.exports = function (data) {
    var n = parseInt(data[0], 10),
        text = data[1];

    return rot(n, text);
};

function rot(n, s) {
    return s.replace(/[a-zA-Z]/g,
        function (c) {
            return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+n)?c:c-(n*2));
        }
    );
}
