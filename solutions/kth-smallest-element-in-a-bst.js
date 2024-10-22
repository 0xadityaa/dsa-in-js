// Pseudo Code:
// We will use an iterative in-order traversal to find the kth smallest element in a binary search tree (BST).
// Initialize an empty stack and set the current node to the root.
// While the stack is not empty or the current node is not null:
//   Traverse to the leftmost node, pushing each node onto the stack.
//   Pop the top node from the stack and decrement k.
//   If k is zero, return the value of the popped node (this is the kth smallest element).
//   Move to the right child of the popped node.
// If we exit the loop without returning, it means k is out of bounds.

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
 * @param {number} k
 * @return {number}
 */
function kthSmallest(root, k) {
  let stack = [];
  let curr = root;

  while (stack.length > 0 || curr !== null) {
    while (curr !== null) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    k--;

    if (k === 0) {
      return curr.val;
    }

    curr = curr.right;
  }
}

module.exports = { kthSmallest };
