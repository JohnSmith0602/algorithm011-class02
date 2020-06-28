/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (l1 == null) return l2;
  if (l2 == null) return l1;

  var merged;
  if (l1.val <= l2.val) {
    merged = l1;
    merged.next = mergeTwoLists(l1.next, l2);
  } else {
    merged = l2;
    merged.next = mergeTwoLists(l1, l2.next);
  }

  return merged;
};