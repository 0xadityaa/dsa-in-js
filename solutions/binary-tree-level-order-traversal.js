// Pseudo Code:
// We will use a queue to perform a level order traversal of the binary tree.
// Initialize an empty result array to store the values of nodes at each level.
// Initialize a queue and add the root node to it if it is not null.
// While the queue is not empty:
//   Initialize an empty array to store the values of the current level.
//   Get the number of nodes at the current level (length of the queue).
//   For each node in the current level:
//     - Dequeue the front node from the queue.
//     - Add the value of the node to the current level's array.
//     - If the left child exists, enqueue it.
//     - If the right child exists, enqueue it.
//   Add the current level's array to the result array.
// Return the result array containing the level order traversal of the tree.

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
 * @return {number[][]}
 */
function levelOrder(root) {
  let res = [];
  let q = [];

  if (root) {
    q.push(root);
  }

  while (q.length > 0) {
    let val = [];
    for (let i = 0, len = q.length; i < len; i++) {
      let node = q.shift();
      val.push(node.val);

      if (node.left) {
        q.push(node.left);
      }

      if (node.right) {
        q.push(node.right);
      }
    }
    res.push(val);
  }
  return res;
}

module.exports = { levelOrder };
