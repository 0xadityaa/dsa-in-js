const { MyLinkedList } = require("../solutions/design-linked-list");

describe("MyLinkedList", () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new MyLinkedList();
  });

  test("should return -1 for get on an empty list", () => {
    expect(linkedList.get(0)).toBe(-1);
  });

  test("should add a node at the head", () => {
    linkedList.addAtHead(1);
    expect(linkedList.get(0)).toBe(1);
  });

  test("should add a node at the tail", () => {
    linkedList.addAtTail(1);
    expect(linkedList.get(0)).toBe(1);
    linkedList.addAtTail(2);
    expect(linkedList.get(1)).toBe(2);
  });

  test("should add a node at index", () => {
    linkedList.addAtHead(1);
    linkedList.addAtIndex(1, 2); // List is now 1->2
    expect(linkedList.get(1)).toBe(2);
    linkedList.addAtIndex(0, 3); // List is now 3->1->2
    expect(linkedList.get(0)).toBe(3);
  });

  test("should not add a node at an invalid index", () => {
    linkedList.addAtHead(1);
    linkedList.addAtIndex(2, 2); // Invalid index, should not add
    expect(linkedList.get(1)).toBe(-1);
  });

  test("should delete a node at index", () => {
    linkedList.addAtHead(1);
    linkedList.addAtTail(2);
    linkedList.deleteAtIndex(1); // List is now 1
    expect(linkedList.get(1)).toBe(-1);
  });

  test("should delete the head node", () => {
    linkedList.addAtHead(1);
    linkedList.addAtTail(2);
    linkedList.deleteAtIndex(0); // List is now 2
    expect(linkedList.get(0)).toBe(2);
  });

  test("should return the correct length of the list", () => {
    linkedList.addAtHead(1);
    linkedList.addAtTail(2);
    expect(linkedList.getLength()).toBe(2);
    linkedList.deleteAtIndex(0);
    expect(linkedList.getLength()).toBe(1);
  });

  test("should handle multiple operations", () => {
    linkedList.addAtHead(1); // List: 1
    linkedList.addAtTail(2); // List: 1->2
    linkedList.addAtTail(3); // List: 1->2->3
    expect(linkedList.get(0)).toBe(1);
    expect(linkedList.get(1)).toBe(2);
    expect(linkedList.get(2)).toBe(3);
    linkedList.deleteAtIndex(1); // List: 1->3
    expect(linkedList.get(1)).toBe(3);
  });
});
