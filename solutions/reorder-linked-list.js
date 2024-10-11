// Pseudo Code:
// We will use the fast and slow pointer technique to find the middle of the linked list.
// Initialize two pointers, slow and fast, both starting at the head of the list.
// Move the fast pointer two steps at a time and the slow pointer one step at a time.
// When the fast pointer reaches the end of the list, the slow pointer will be at the middle.
// Split the list into two halves: the first half is from head to slow, and the second half is from slow.next to the end.
// Reverse the second half of the list.
// Merge the two halves by alternating nodes from the first and second halves.

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
 * @return {void}
 */
function reorderList(head) {
  if (!head || !head.next) return;

  let slow = head;
  let fast = head.next;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let second = slow.next;
  let prev = (slow.next = null);

  while (second !== null) {
    let temp = second.next;
    second.next = prev;
    prev = second;
    second = temp;
  }

  let first = head;
  second = prev;

  while (second !== null) {
    let temp1 = first.next;
    let temp2 = second.next;

    first.next = second;
    second.next = temp1;
    first = temp1;
    second = temp2;
  }
}

module.exports = { reorderList };
