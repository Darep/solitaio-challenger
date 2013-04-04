var _ = require('underscore');
var f = require('../functional-helpers');

var add = function (a, b) { return a + b; };

module.exports = function (nums) {
    // map-reduce, yay!
    var sum = _.map(nums, f.toInt).reduce(add);

    return sum.toString();
};
