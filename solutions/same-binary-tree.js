// Pseudo Code:
// We will use a recursive approach to check if two binary trees are the same.
// If both nodes are null, return true (both trees are empty).
// If one of the nodes is null, return false (one tree is empty).
// If the values of the nodes are not equal, return false (trees are not the same).
// Recursively check the left subtrees and the right subtrees.
// Return true if both left and right subtrees are the same.

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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function isSameTree(p, q) {
  if (!p && !q) {
    return true;
  }

  if (p && q && p.val === q.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  } else {
    return false;
  }
}

module.exports = { isSameTree };
