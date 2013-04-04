var _ = require('underscore');

var add = function (a, b) { return a + b; };
var deduct = function (a, b) { return a - b; };

module.exports = function (data) {
    var lines = data.split('\n'),
        operation = lines[0],
        nums = lines.slice(1);

    // Handle special case, where Challenger's deduction acts funnily (Clojure's apply acts funnily)
    if (nums.length == 1 && operation == '-') {
        return  0 - nums[0];
    }

    if (operation == '-') {
        operation = deduct;
    } else {
        operation = add;
    }

    // map-reduce, yay!
    var sum = _.map(nums, function (n) { return parseInt(n, 10); })
               .reduce(function (memo, num) { return operation(memo, num); });

    return sum.toString();
};
