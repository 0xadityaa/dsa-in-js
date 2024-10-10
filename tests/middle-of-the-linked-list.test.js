const { middleNode } = require("../solutions/middle-of-the-linked-list");

// Definition for singly-linked list.
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
  let head = null;
  let current = null;

  for (const val of arr) {
    const newNode = new ListNode(val);
    if (!head) {
      head = newNode;
      current = head;
    } else {
      current.next = newNode;
      current = current.next;
    }
  }
  return head;
}

// Helper function to convert a linked list to an array
function linkedListToArray(head) {
  const result = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

test("should return the middle node for an odd-length list", () => {
  const head = createLinkedList([1, 2, 3, 4, 5]);
  const result = middleNode(head);
  expect(linkedListToArray(result)).toEqual([3, 4, 5]);
});

test("should return the middle node for an even-length list", () => {
  const head = createLinkedList([1, 2, 3, 4, 5, 6]);
  const result = middleNode(head);
  expect(linkedListToArray(result)).toEqual([4, 5, 6]);
});

test("should return the only node for a single-node list", () => {
  const head = createLinkedList([1]);
  const result = middleNode(head);
  expect(linkedListToArray(result)).toEqual([1]);
});

test("should return null for an empty list", () => {
  const head = null;
  const result = middleNode(head);
  expect(result).toBeNull();
});
