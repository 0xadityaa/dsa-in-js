// Pseudo Code:
// We will create a dummy node to help simplify the merging process ald also prevent edge cases of empty lists.
// We will use a pointer to track the current node in the merged list.
// We will iterate through both lists until we reach the end of one of them.
// In each iteration, we will compare the current nodes of both lists:
// If the value of the first list's node is less than the second list's node,
// We will append it to the merged list and move to the next node in the first list.
// Otherwise, we will append the second list's node to the merged list and move to the next node in the second list.
// After one of the lists is exhausted, we will append the remaining nodes of the other list to the merged list as they are already sorted.

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeTwoLists(list1, list2) {
  let dummy = { val: 0, next: null };
  let node = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      node.next = list1;
      list1 = list1.next;
    } else {
      node.next = list2;
      list2 = list2.next;
    }
    node = node.next;
  }

  if (list1) {
    node.next = list1;
  } else {
    node.next = list2;
  }

  return dummy.next;
}

module.exports = { mergeTwoLists };
