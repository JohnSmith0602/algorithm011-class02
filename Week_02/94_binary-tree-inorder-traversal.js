/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  if (root == null) {
    return [];
  }

  if (root.left == null && root.right == null) {
    return [root.val];
  }

  return inorderTraversal(root.left).concat(root.val, inorderTraversal(root.right));
};