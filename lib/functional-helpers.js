module.exports = {
    prop: function(name) {
        return function (object) {
            return object[name];
        };
    },
    toInt: function(n) {
        return parseInt(n, 10);
    }
};
