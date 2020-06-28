/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  var length = nums.length;
  k = k % length;

  for (var i = length - 1; i >= 0; i--) {
    nums[i + k] = nums[i];
  }

  for (var i = length; i < length + k; i++) {
    nums[i - length] = nums[i];
  }

  nums.length = length;
};