const { levelOrder } = require("../solutions/binary-tree-level-order-traversal");

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

test("should return an empty array for an empty tree", () => {
  const root = null;
  expect(levelOrder(root)).toEqual([]);
});

test("should return [[1]] for a tree with a single node", () => {
  const root = createBinaryTree([1]);
  expect(levelOrder(root)).toEqual([[1]]);
});

test("should return [[1], [2, 3]] for a tree with depth 2", () => {
  const root = createBinaryTree([1, 2, 3]);
  expect(levelOrder(root)).toEqual([[1], [2, 3]]);
});

test("should return [[1], [2, 3], [4, 5]] for a tree with depth 3", () => {
  const root = createBinaryTree([1, 2, 3, 4, 5]);
  expect(levelOrder(root)).toEqual([[1], [2, 3], [4, 5]]);
});

test("should return [[1], [2, 3], [4, 5, 6]] for a tree with varying node counts", () => {
  const root = createBinaryTree([1, 2, 3, 4, 5, null, 6]);
  expect(levelOrder(root)).toEqual([[1], [2, 3], [4, 5, 6]]);
});

