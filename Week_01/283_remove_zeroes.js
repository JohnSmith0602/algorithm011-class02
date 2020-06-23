/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  var j = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      if (i != j) {
        nums[j] = nums[i];
        nums[i] = 0;
      }
      j++;
    }
  }

  return nums;
};