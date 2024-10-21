// Pseudo Code:
// We will use a recursive approach to validate if a binary tree is a binary search tree (BST).
// The function will take three parameters: the current node, the lower bound, and the upper bound.
// If the current node is null, return true (an empty tree is a valid BST).
// Check if the current node's value is within the bounds (greater than the lower bound and less than the upper bound).
// If it is not, return false (the tree is not a valid BST).
// Recursively check the left subtree with updated upper bound (current node's value).
// Recursively check the right subtree with updated lower bound (current node's value).
// Return true if both left and right subtrees are valid, otherwise return false.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isValidBST(root) {
  return valid(root, -Infinity, Infinity);
}

function valid(node, left, right) {
  if (!node) {
    return true;
  }

  if (!(left < node.val && node.val < right)) {
    return false;
  }

  return valid(node.left, left, node.val) && valid(node.right, node.val, right);
}

module.exports = { isValidBST, valid };
