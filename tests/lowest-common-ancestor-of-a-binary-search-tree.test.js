// TreeNode class definition
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const {
  lowestCommonAncestor,
} = require("../solutions/lowest-common-ancestor-of-a-binary-search-tree"); // Update with your actual file name

describe("lowestCommonAncestor", () => {
  // Helper function to create a sample BST
  function createSampleBST() {
    const root = new TreeNode(6);
    root.left = new TreeNode(2);
    root.right = new TreeNode(8);
    root.left.left = new TreeNode(0);
    root.left.right = new TreeNode(4);
    root.left.right.left = new TreeNode(3);
    root.left.right.right = new TreeNode(5);
    root.right.left = new TreeNode(7);
    root.right.right = new TreeNode(9);
    return root;
  }

  test("should return root as LCA when both nodes are in different subtrees", () => {
    const root = createSampleBST();
    const p = new TreeNode(2);
    const q = new TreeNode(8);

    const result = lowestCommonAncestor(root, p, q);

    expect(result.val).toBe(6);
  });

  test("should return the node itself when one node is the ancestor of another", () => {
    const root = createSampleBST();
    const p = new TreeNode(2);
    const q = new TreeNode(4);

    const result = lowestCommonAncestor(root, p, q);

    expect(result.val).toBe(2);
  });

  test("should handle nodes in the same subtree", () => {
    const root = createSampleBST();
    const p = new TreeNode(3);
    const q = new TreeNode(5);

    const result = lowestCommonAncestor(root, p, q);

    expect(result.val).toBe(4);
  });

  test("should handle when one node is the root", () => {
    const root = createSampleBST();
    const p = new TreeNode(6);
    const q = new TreeNode(8);

    const result = lowestCommonAncestor(root, p, q);

    expect(result.val).toBe(6);
  });

  test("should handle leaf nodes", () => {
    const root = createSampleBST();
    const p = new TreeNode(7);
    const q = new TreeNode(9);

    const result = lowestCommonAncestor(root, p, q);

    expect(result.val).toBe(8);
  });

  test("should return null for empty tree", () => {
    const result = lowestCommonAncestor(null, new TreeNode(1), new TreeNode(2));

    expect(result).toBeNull();
  });

  test("should handle when nodes are the same", () => {
    const root = createSampleBST();
    const p = new TreeNode(4);
    const q = new TreeNode(4);

    const result = lowestCommonAncestor(root, p, q);

    expect(result.val).toBe(4);
  });

  // Edge cases
  test("should handle negative values", () => {
    const root = new TreeNode(0);
    root.left = new TreeNode(-2);
    root.right = new TreeNode(2);
    const p = new TreeNode(-2);
    const q = new TreeNode(2);

    const result = lowestCommonAncestor(root, p, q);

    expect(result.val).toBe(0);
  });
});
