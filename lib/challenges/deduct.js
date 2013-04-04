var _ = require('underscore');
var f = require('../functional-helpers');

var deduct = function (a, b) { return a - b; };

module.exports = function (nums) {
    // Handle special case, where Challenger's deduction acts funnily (Clojure's apply acts funnily)
    if (nums.length == 1) {
        return  0 - nums[0];
    }

    // map-reduce, yay!
    var sum = _.map(nums, f.toInt).reduce(deduct);

    return sum.toString();
};
