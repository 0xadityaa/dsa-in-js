const { isValidBST } = require("../solutions/validate-binary-search-tree");

// Definition for a binary tree node.
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Helper function to create a binary tree from an array
function createBinaryTree(arr) {
  if (!arr.length) return null;
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;

  while (i < arr.length) {
    const current = queue.shift();
    if (arr[i] !== null) {
      current.left = new TreeNode(arr[i]);
      queue.push(current.left);
    }
    i++;
    if (i < arr.length && arr[i] !== null) {
      current.right = new TreeNode(arr[i]);
      queue.push(current.right);
    }
    i++;
  }
  return root;
}

test("should return true for a valid BST", () => {
  const root = createBinaryTree([2, 1, 3]);
  expect(isValidBST(root)).toBe(true);
});

test("should return false for an invalid BST (left child greater than root)", () => {
  const root = createBinaryTree([5, 1, 4, null, null, 3, 6]);
  expect(isValidBST(root)).toBe(false);
});

test("should return false for an invalid BST (right child less than root)", () => {
  const root = createBinaryTree([5, 4, 6, null, null, 3, 7]);
  expect(isValidBST(root)).toBe(false);
});

test("should return true for a single node tree", () => {
  const root = createBinaryTree([1]);
  expect(isValidBST(root)).toBe(true);
});

test("should return true for an empty tree", () => {
  const root = createBinaryTree([]);
  expect(isValidBST(root)).toBe(true);
});

test("should return true for a valid BST with negative values", () => {
  const root = createBinaryTree([-10, -20, -5]);
  expect(isValidBST(root)).toBe(true);
});

test("should return false for a tree with duplicate values", () => {
  const root = createBinaryTree([2, 1, 2]);
  expect(isValidBST(root)).toBe(false);
});

