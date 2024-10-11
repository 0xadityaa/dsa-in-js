// Pseudo Code:
// We will separate the odd and even indexed nodes of the linked list.
// Initialize two pointers, odd and even, to the head and head.next respectively.
// Keep track of the head of the even indexed nodes.
// Iterate through the list while there are even nodes available:
//   - Connect the odd node to the next odd node.
//   - Move the odd pointer to the next odd node.
//   - Connect the even node to the next even node.
//   - Move the even pointer to the next even node.
// After the loop, connect the last odd node to the head of the even indexed nodes.
// Finally, return the head of the modified list.

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
var oddEvenList = function (head) {
  if (head === null || head.next === null) {
    return head;
  }

  let odd = head;
  let even = head.next;
  let evenHead = head.next;

  while (even !== null && even.next !== null) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }
  odd.next = evenHead;

  return head;
};

module.exports = { oddEvenList };
