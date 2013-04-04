var _ = require('underscore');

var operation = function (a, b) { return a - b; };

module.exports = function (nums) {
    // Handle special case, where Challenger's deduction acts funnily (Clojure's apply acts funnily)
    if (nums.length == 1) {
        return  0 - nums[0];
    }

    // map-reduce, yay!
    var sum = _.map(nums, function (n) { return parseInt(n, 10); })
               .reduce(function (memo, num) { return operation(memo, num); });

    return sum.toString();
};
