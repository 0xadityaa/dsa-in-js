const { isSubtree } = require("../solutions/subtree-of-another-tree");

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

test("should return true when subRoot is a subtree of root", () => {
  const root = createBinaryTree([3, 4, 5, 1, 2]);
  const subRoot = createBinaryTree([4, 1, 2]);
  expect(isSubtree(root, subRoot)).toBe(true);
});

test("should return false when subRoot is not a subtree of root", () => {
  const root = createBinaryTree([3, 4, 5, 1, 2]);
  const subRoot = createBinaryTree([4, null, 2]);
  expect(isSubtree(root, subRoot)).toBe(false);
});

test("should return true when both root and subRoot are null", () => {
  expect(isSubtree(null, null)).toBe(true);
});

test("should return false when root is null and subRoot is not", () => {
  const subRoot = createBinaryTree([1]);
  expect(isSubtree(null, subRoot)).toBe(false);
});

test("should return true when subRoot is null and root is not", () => {
  const root = createBinaryTree([1]);
  expect(isSubtree(root, null)).toBe(true);
});

test("should return true when subRoot is the same as root", () => {
  const root = createBinaryTree([1, 2, 3]);
  const subRoot = createBinaryTree([1, 2, 3]);
  expect(isSubtree(root, subRoot)).toBe(true);
});

test("should return false when subRoot has different structure", () => {
  const root = createBinaryTree([1, 2, 3]);
  const subRoot = createBinaryTree([1, 2, null, 3]);
  expect(isSubtree(root, subRoot)).toBe(false);
});
