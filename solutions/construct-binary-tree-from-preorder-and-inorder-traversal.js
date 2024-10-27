// Pseudo Code:
// We will use a recursive approach to construct a binary tree from preorder and inorder traversals.
// 1. If the preorder or inorder array is empty, return null (base case).
// 2. The first element of the preorder array is the root of the tree.
// 3. Find the index of the root in the inorder array to determine the left and right subtrees.
// 4. Recursively construct the left subtree using the corresponding elements from the preorder and inorder arrays.
// 5. Recursively construct the right subtree using the remaining elements from the preorder and inorder arrays.
// 6. Return the constructed root node.

/**
 * Definition for a binary tree node.
 */
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) {
    return null;
  }

  let root = new TreeNode(preorder[0]);
  let mid = inorder.indexOf(preorder[0]);

  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));

  return root;
};

module.exports = { buildTree };
