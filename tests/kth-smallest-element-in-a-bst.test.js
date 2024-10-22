const { kthSmallest } = require("../solutions/kth-smallest-element-in-a-bst");

// Definition for a binary tree node.
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Helper function to create a binary search tree from an array
function createBST(arr) {
  if (arr.length === 0) return null;
  const mid = Math.floor(arr.length / 2);
  const root = new TreeNode(arr[mid]);
  root.left = createBST(arr.slice(0, mid));
  root.right = createBST(arr.slice(mid + 1));
  return root;
}

test("should return 1 for the 1st smallest element in the BST", () => {
  const root = createBST([1, 2, 3]);
  expect(kthSmallest(root, 1)).toBe(1);
});

test("should return 2 for the 2nd smallest element in the BST", () => {
  const root = createBST([1, 2, 3]);
  expect(kthSmallest(root, 2)).toBe(2);
});

test("should return 3 for the 3rd smallest element in the BST", () => {
  const root = createBST([1, 2, 3]);
  expect(kthSmallest(root, 3)).toBe(3);
});

test("should return 4 for the 4th smallest element in a larger BST", () => {
  const root = createBST([1, 2, 3, 4, 5, 6, 7]);
  expect(kthSmallest(root, 4)).toBe(4);
});

test("should return null for k greater than the number of nodes", () => {
  const root = createBST([1, 2, 3]);
  expect(kthSmallest(root, 4)).toBeUndefined();
});

test("should return null for k less than 1", () => {
  const root = createBST([1, 2, 3]);
  expect(kthSmallest(root, 0)).toBeUndefined();
});

test("should return null for an empty tree", () => {
  const root = null;
  expect(kthSmallest(root, 1)).toBeUndefined();
});

