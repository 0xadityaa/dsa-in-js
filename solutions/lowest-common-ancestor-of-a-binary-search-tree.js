// Pseudo Code:
// We will use an iterative approach to find the lowest common ancestor in a binary search tree.
// Start from the root of the tree.
// While the current node is not null:
//   If both p and q are greater than the current node's value, move to the right child.
//   If both p and q are less than the current node's value, move to the left child.
//   If one of p or q is equal to the current node, or if one is on the left and the other is on the right,
//   then the current node is the lowest common ancestor.
// Return the current node as the lowest common ancestor.

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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {
  while (root) {
    if (root.val < p.val && root.val < q.val) {
      root = root.right;
    } else if (root.val > p.val && root.val > q.val) {
      root = root.left;
    } else {
      return root;
    }
  }
  return null;
}

module.exports = { lowestCommonAncestor };
