/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  var result = [];

  dfs(0, [], k);

  function dfs(level, set, k) {
    if (set.length == k && level <= n) {
      result.push(set);
      return;
    }

    if (level > n) {
      return;
    }

    dfs(level + 1, [...set], k);
    dfs(level + 1, [...set, level + 1], k);
  }

  return result;
};