// Pseudo Code:
// We will use a recursive approach to check if one binary tree is a subtree of another.
// If the subRoot is null, return true (an empty tree is a subtree of any tree).
// If the root is null, return false (a non-empty tree cannot be a subtree of an empty tree).
// Check if the current trees (root and subRoot) are the same using the sameTree function.
// If they are the same, return true.
// Recursively check the left and right subtrees of the root to see if subRoot is a subtree of either.
// Return true if subRoot is found in either the left or right subtree, otherwise return false.

// Function to check if two trees are the same
// If both trees are null, return true (both trees are empty).
// If one tree is null and the other is not, return false (one tree is empty).
// If the values of the nodes are equal, recursively check the left and right subtrees.
// Return true if both left and right subtrees are the same, otherwise return false.

/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  if (!subRoot) {
    return true;
  }

  if (!root) {
    return false;
  }

  if (sameTree(root, subRoot)) {
    return true;
  }

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

var sameTree = function (root, subRoot) {
  if (!root && !subRoot) {
    return true;
  }

  if (root && subRoot && root.val === subRoot.val) {
    return (
      sameTree(root.left, subRoot.left) && sameTree(root.right, subRoot.right)
    );
  }

  return false;
};

module.exports = { isSubtree, sameTree };
