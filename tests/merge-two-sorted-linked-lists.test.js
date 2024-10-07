const { mergeTwoLists } = require("../solutions/merge-two-sorted-linked-lists");

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

test("should return null when both lists are empty", () => {
  const result = mergeTwoLists(null, null);
  expect(result).toBeNull();
});

test("should return the first list when the second list is empty", () => {
  const list1 = createLinkedList([1, 2, 4]);
  const result = mergeTwoLists(list1, null);
  expect(linkedListToArray(result)).toEqual([1, 2, 4]);
});

test("should return the second list when the first list is empty", () => {
  const list2 = createLinkedList([1, 3, 4]);
  const result = mergeTwoLists(null, list2);
  expect(linkedListToArray(result)).toEqual([1, 3, 4]);
});

test("should merge two sorted lists correctly", () => {
  const list1 = createLinkedList([1, 2, 4]);
  const list2 = createLinkedList([1, 3, 4]);
  const result = mergeTwoLists(list1, list2);
  expect(linkedListToArray(result)).toEqual([1, 1, 2, 3, 4, 4]);
});

test("should handle lists with duplicate values", () => {
  const list1 = createLinkedList([1, 2, 2]);
  const list2 = createLinkedList([1, 1, 3]);
  const result = mergeTwoLists(list1, list2);
  expect(linkedListToArray(result)).toEqual([1, 1, 1, 2, 2, 3]);
});

test("should handle lists of different lengths", () => {
  const list1 = createLinkedList([1, 3, 5]);
  const list2 = createLinkedList([2, 4]);
  const result = mergeTwoLists(list1, list2);
  expect(linkedListToArray(result)).toEqual([1, 2, 3, 4, 5]);
});
