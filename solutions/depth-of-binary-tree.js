// Pseudo Code:
// We will use a recursive approach to find the maximum depth of the binary tree.
// If the current node is null, return 0 (base case).
// Recursively calculate the depth of the left subtree.
// Recursively calculate the depth of the right subtree.
// The maximum depth at the current node is 1 plus the maximum of the depths of the left and right subtrees.
// Return the maximum depth.

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxDepth(root) {
  if (root === null) {
    return 0;
  }

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

module.exports = { maxDepth };
