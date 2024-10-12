const { removeNthFromEnd } = require("../solutions/remove-node-from-end-of-linked-list");

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

test("should remove the last node from a list with multiple elements", () => {
  const head = createLinkedList([1, 2, 3, 4, 5]);
  const result = removeNthFromEnd(head, 1);
  expect(linkedListToArray(result)).toEqual([1, 2, 3, 4]);
});

test("should remove the second to last node from a list with multiple elements", () => {
  const head = createLinkedList([1, 2, 3, 4, 5]);
  const result = removeNthFromEnd(head, 2);
  expect(linkedListToArray(result)).toEqual([1, 2, 3, 5]);
});

test("should remove the first node from a list with multiple elements", () => {
  const head = createLinkedList([1, 2, 3, 4, 5]);
  const result = removeNthFromEnd(head, 5);
  expect(linkedListToArray(result)).toEqual([2, 3, 4, 5]);
});

test("should return the same node for a single-node list when removing the only node", () => {
  const head = createLinkedList([1]);
  const result = removeNthFromEnd(head, 1);
  expect(result).toBeNull();
});

test("should return null for an empty list", () => {
  const head = null;
  const result = removeNthFromEnd(head, 1);
  expect(result).toBeNull();
});

test("should handle a list with two nodes and remove the first node", () => {
  const head = createLinkedList([1, 2]);
  const result = removeNthFromEnd(head, 2);
  expect(linkedListToArray(result)).toEqual([2]);
});

test("should handle a list with two nodes and remove the last node", () => {
  const head = createLinkedList([1, 2]);
  const result = removeNthFromEnd(head, 1);
  expect(linkedListToArray(result)).toEqual([1]);
});

