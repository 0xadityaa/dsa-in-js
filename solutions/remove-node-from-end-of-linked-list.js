// Pseudo Code:
// CREATE a dummy node with value 0 and next pointing to head
//     SET l to dummy
//     SET r to head

//     WHILE n > 0
//         MOVE r to the next node
//         DECREMENT n

//     WHILE r is not null
//         MOVE l to the next node
//         MOVE r to the next node

//     SET l.next to l.next.next (removing the nth node from the end)

//     RETURN dummy.next (the new head of the list)

//  Definition for singly-linked list.
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
  let dummy = new ListNode(0, head);
  let l = dummy;
  let r = head;

  // Move r n steps ahead
  for (let i = 0; i < n; i++) {
    if (r) {
      r = r.next;
    } else {
      // If r is null before completing n steps, n is greater than the length of the list
      return head; // Return the original head
    }
  }

  // Move both l and r until r reaches the end
  while (r) {
    l = l.next;
    r = r.next;
  }

  // Remove the nth node from the end
  l.next = l.next ? l.next.next : null;

  return dummy.next;
}

module.exports = { removeNthFromEnd };
