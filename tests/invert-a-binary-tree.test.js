const { invertTree } = require("../solutions/invert-a-binary-tree");

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

// Helper function to convert a binary tree to an array (level order)
function binaryTreeToArray(root) {
  const result = [];
  const queue = [root];

  while (queue.length) {
    const current = queue.shift();
    if (current) {
      result.push(current.val);
      queue.push(current.left);
      queue.push(current.right);
    } else {
      result.push(null);
    }
  }
  // Remove trailing nulls for cleaner output
  while (result[result.length - 1] === null) {
    result.pop();
  }
  return result;
}

test("should invert a binary tree", () => {
  const root = createBinaryTree([1, 2, 3, 4, 5]);
  const inverted = invertTree(root);
  expect(binaryTreeToArray(inverted)).toEqual([1, 3, 2, null, null, 5, 4]);
});

test("should return null for an empty tree", () => {
  const inverted = invertTree(null);
  expect(inverted).toBeNull();
});

test("should invert a single node tree", () => {
  const root = createBinaryTree([1]);
  const inverted = invertTree(root);
  expect(binaryTreeToArray(inverted)).toEqual([1]);
});

test("should invert a tree with only left children", () => {
  const root = createBinaryTree([1, 2, null, 3, null]);
  const inverted = invertTree(root);
  expect(binaryTreeToArray(inverted)).toEqual([1, null, 2, null, 3]);
});

test("should invert a tree with only right children", () => {
  const root = createBinaryTree([1, null, 2, null, 3]);
  const inverted = invertTree(root);
  expect(binaryTreeToArray(inverted)).toEqual([1, 2, null, 3]);
});
