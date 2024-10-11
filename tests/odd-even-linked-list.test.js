const { oddEvenList } = require("../solutions/odd-even-linked-list");

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

test("should rearrange odd and even nodes for a list with odd length", () => {
  const head = createLinkedList([1, 2, 3, 4, 5]);
  const result = oddEvenList(head);
  expect(linkedListToArray(result)).toEqual([1, 3, 5, 2, 4]);
});

test("should rearrange odd and even nodes for a list with even length", () => {
  const head = createLinkedList([1, 2, 3, 4, 5, 6]);
  const result = oddEvenList(head);
  expect(linkedListToArray(result)).toEqual([1, 3, 5, 2, 4, 6]);
});

test("should return the same node for a single-node list", () => {
  const head = createLinkedList([1]);
  const result = oddEvenList(head);
  expect(linkedListToArray(result)).toEqual([1]);
});

test("should return null for an empty list", () => {
  const head = null;
  const result = oddEvenList(head);
  expect(result).toBeNull();
});

test("should handle a list with two nodes", () => {
  const head = createLinkedList([1, 2]);
  const result = oddEvenList(head);
  expect(linkedListToArray(result)).toEqual([1, 2]);
});

