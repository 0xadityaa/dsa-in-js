const { isSameTree } = require("../solutions/same-binary-tree");

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

test("should return true for identical trees", () => {
  const tree1 = createBinaryTree([1, 2, 3]);
  const tree2 = createBinaryTree([1, 2, 3]);
  expect(isSameTree(tree1, tree2)).toBe(true);
});

test("should return false for trees with different structures", () => {
  const tree1 = createBinaryTree([1, 2]);
  const tree2 = createBinaryTree([1, null, 2]);
  expect(isSameTree(tree1, tree2)).toBe(false);
});

test("should return false for trees with different values", () => {
  const tree1 = createBinaryTree([1, 2, 3]);
  const tree2 = createBinaryTree([1, 1, 3]);
  expect(isSameTree(tree1, tree2)).toBe(false);
});

test("should return true for two empty trees", () => {
  expect(isSameTree(null, null)).toBe(true);
});

test("should return false for one empty tree and one non-empty tree", () => {
  const tree1 = createBinaryTree([1]);
  expect(isSameTree(tree1, null)).toBe(false);
});

