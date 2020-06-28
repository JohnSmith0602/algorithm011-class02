/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var map = {};

  for (var i = 0; i < nums.length; i++) {
    if (map[(target - nums[i]).toString()]) {
      return [map[(target - nums[i]).toString()] - 1, i];
    }

    map[nums[i].toString()] = i + 1;
  }

  return [];
};