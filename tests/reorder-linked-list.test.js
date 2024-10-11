const { reorderList } = require("../solutions/reorder-linked-list");

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

test("should reorder a linked list with multiple elements", () => {
  const head = createLinkedList([1, 2, 3, 4, 5]);
  reorderList(head);
  expect(linkedListToArray(head)).toEqual([1, 5, 2, 4, 3]);
});

test("should reorder a linked list with an even number of elements", () => {
  const head = createLinkedList([1, 2, 3, 4]);
  reorderList(head);
  expect(linkedListToArray(head)).toEqual([1, 4, 2, 3]);
});

test("should handle a linked list with a single element", () => {
  const head = createLinkedList([1]);
  reorderList(head);
  expect(linkedListToArray(head)).toEqual([1]);
});

test("should handle an empty linked list", () => {
  const head = null;
  reorderList(head);
  expect(head).toBeNull();
});

test("should handle a linked list with two elements", () => {
  const head = createLinkedList([1, 2]);
  reorderList(head);
  expect(linkedListToArray(head)).toEqual([1, 2]);
});

