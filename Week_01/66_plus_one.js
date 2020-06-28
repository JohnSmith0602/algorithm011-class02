/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  var length = digits.length;
  var result = [];
  var hasAdvance = false;

  if (digits[length - 1] != 9) {
    result[length - 1] = digits[length - 1] + 1;
    for (var i = 0; i < length - 1; i++) {
      result[i] = digits[i];
    }
  } else {
    result[length - 1] = 0;
    hasAdvance = true;
    for (var i = length - 2; i >= 0; i--) {
      if (hasAdvance) {
        if (digits[i] == 9) {
          result[i] = 0;
          hasAdvance = true;
        } else {
          result[i] = digits[i] + 1;
          hasAdvance = false;
        }
      } else {
        result[i] = digits[i];
        hasAdvance = false;
      }
    }

    if (hasAdvance) {
      result[0] = 1;
      result[length] = 0;
    }
  }

  return result;
};