// Pseudo Code:
// We will use the fast and slow pointer technique to find the middle of the linked list.
// Initialize two pointers, fast and slow, both starting at the head of the list.
// Move the fast pointer two steps at a time and the slow pointer one step at a time.
// When the fast pointer reaches the end of the list (null), the slow pointer will be at the middle.
// Return the slow pointer as the middle node of the linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let fast = head;
  let slow = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

module.exports = { middleNode };
