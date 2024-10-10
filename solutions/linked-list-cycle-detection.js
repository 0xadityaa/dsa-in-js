// Pseudo Code:
// We will use fast and slow pointers algorithm to detect a cycle in the linked list.
// Initialize two pointers, fast and slow, both starting at the head of the list.
// Move the slow pointer one step at a time and the fast pointer two steps at a time.
// If there is a cycle, the fast pointer will eventually meet the slow pointer.
// If the fast pointer reaches the end of the list (null), then there is no cycle.
// Return true if a cycle is detected, otherwise return false.

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

function hasCycle(head) {
  let fast = head;
  let slow = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      return true;
    }
  }

  return false;
}

module.exports = { hasCycle };
