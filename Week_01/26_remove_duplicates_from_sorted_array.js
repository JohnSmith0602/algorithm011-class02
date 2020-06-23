/**
 * @param {number[]} nums
 * @return {number}
 * using JavaScript
 */
var removeDuplicates = function(nums) {
  var dupCount = 0;
  var currentMax = nums[0];
  var length = nums.length;
  for (var i = 1; i < length; i++) {
    if (nums[i] == currentMax) {
      dupCount += 1;
    } else {
      nums[i - dupCount] = nums[i];
      currentMax = nums[i];
    }
  }

  return length - dupCount;
};