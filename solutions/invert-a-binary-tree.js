// Pseudo Code:
// We will use a recursive approach to invert the binary tree.
// If the current node is null, return null.
// Create a new TreeNode with the value of the current node.
// Recursively invert the left subtree and assign it to the right of the new node.
// Recursively invert the right subtree and assign it to the left of the new node.
// Return the new node as the root of the inverted tree.

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
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function invertTree(root) {
    if (root === null) return null;

    let node = new TreeNode(root.val);

    node.right = invertTree(root.left);
    node.left = invertTree(root.right);

    return node;
}

module.exports = { invertTree };
