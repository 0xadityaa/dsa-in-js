const { hasCycle } = require("../solutions/linked-list-cycle-detection");

// Definition for singly-linked list.
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Helper function to create a linked list with a cycle
function createCyclicLinkedList(arr, cycleIndex) {
  let head = null;
  let current = null;
  let cycleNode = null;

  for (let i = 0; i < arr.length; i++) {
    const newNode = new ListNode(arr[i]);
    if (!head) {
      head = newNode;
      current = head;
    } else {
      current.next = newNode;
      current = current.next;
    }
    if (i === cycleIndex) {
      cycleNode = newNode;
    }
  }

  if (cycleNode) {
    current.next = cycleNode; // Create a cycle
  }

  return head;
}

// Test cases
test("should return true for a linked list with a cycle", () => {
  const head = createCyclicLinkedList([3, 2, 0, -4], 1); // Cycle starts at node with value 2
  expect(hasCycle(head)).toBe(true);
});

test("should return false for a linked list without a cycle", () => {
  const head = createCyclicLinkedList([1, 2, 3, 4], -1); // No cycle
  expect(hasCycle(head)).toBe(false);
});

test("should return false for an empty linked list", () => {
  const head = null;
  expect(hasCycle(head)).toBe(false);
});

test("should return true for a single node linked list with a cycle", () => {
  const head = new ListNode(1);
  head.next = head; // Cycle to itself
  expect(hasCycle(head)).toBe(true);
});

test("should return false for a single node linked list without a cycle", () => {
  const head = new ListNode(1);
  expect(hasCycle(head)).toBe(false);
});
