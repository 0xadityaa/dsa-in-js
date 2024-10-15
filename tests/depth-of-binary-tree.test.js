const { maxDepth } = require("../solutions/depth-of-binary-tree");

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

test("should return 0 for an empty tree", () => {
  const root = null;
  expect(maxDepth(root)).toBe(0);
});

test("should return 1 for a single node tree", () => {
  const root = createBinaryTree([1]);
  expect(maxDepth(root)).toBe(1);
});

test("should return 2 for a tree with depth 2", () => {
  const root = createBinaryTree([1, 2]);
  expect(maxDepth(root)).toBe(2);
});

test("should return 3 for a tree with depth 3", () => {
  const root = createBinaryTree([1, 2, 3, 4, 5]);
  expect(maxDepth(root)).toBe(3);
});

test("should return 4 for a tree with depth 4", () => {
  const root = createBinaryTree([1, 2, null, 3, null, null, 4]);
  expect(maxDepth(root)).toBe(4);
});

test("should return 3 for a balanced tree", () => {
  const root = createBinaryTree([1, 2, 3, 4, 5, 6, 7]);
  expect(maxDepth(root)).toBe(3);
});

