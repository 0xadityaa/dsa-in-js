const { buildTree } = require("../solutions/construct-binary-tree-from-preorder-and-inorder-traversal");

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

test("should construct a binary tree from preorder and inorder traversals", () => {
  const preorder = [3, 9, 20, 15, 7];
  const inorder = [9, 3, 15, 20, 7];
  const root = buildTree(preorder, inorder);
  expect(binaryTreeToArray(root)).toEqual([3, 9, 20, null, null, 15, 7]);
});

test("should return null for empty input arrays", () => {
  const root = buildTree([], []);
  expect(root).toBeNull();
});

test("should construct a single node tree", () => {
  const preorder = [1];
  const inorder = [1];
  const root = buildTree(preorder, inorder);
  expect(binaryTreeToArray(root)).toEqual([1]);
});

test("should construct a left-skewed tree", () => {
  const preorder = [3, 2, 1];
  const inorder = [1, 2, 3];
  const root = buildTree(preorder, inorder);
  expect(binaryTreeToArray(root)).toEqual([3, 2, null, 1]);
});

test("should construct a right-skewed tree", () => {
  const preorder = [1, 2, 3];
  const inorder = [1, 2, 3];
  const root = buildTree(preorder, inorder);
  expect(binaryTreeToArray(root)).toEqual([1, null, 2, null, 3]);
});

