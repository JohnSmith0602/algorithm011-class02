/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  var mapping = {};

  for (var i = 0; i < strs.length; i++) {
    var sorttedStr = strs[i].split('').sort().join('');
    if (mapping[sorttedStr]) {
      mapping[sorttedStr].push(strs[i]);
    } else {
      mapping[sorttedStr] = [strs[i]];
    }
  }

  const result = [];
  for (var key in mapping) {
    result.push(mapping[key]);
  }

  return result;
};