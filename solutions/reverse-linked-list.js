// Pseudo Code:
// We need to reverse the linked list, so we need to keep track of previous and next node
// We can do this by using 3 pointers
// We start with prev as null, curr as head and next as null
// We iterate over the list until curr is not null
// We keep track of next node
// We reverse the link by pointing current node to previous
// We move prev to curr and curr to next

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
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
  let [prev, curr, next] = [null, head, null];

  while (curr) {
    next = curr.next;
    curr.next = prev;

    prev = curr;
    curr = next;
  }
  return prev;
}

module.exports = { reverseList };
