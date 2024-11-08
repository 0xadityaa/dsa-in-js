// Definition for a _Node.
class _Node {
  constructor(val = 0, neighbors = []) {
    this.val = val;
    this.neighbors = neighbors;
  }
}

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
  let oldToNew = new Map();
  return dfs(node, oldToNew);
};

function dfs(node, oldToNew) {
  if (node === null) return null;

  if (oldToNew.has(node)) {
    return oldToNew.get(node);
  }

  let copy = new _Node(node.val);
  oldToNew.set(node, copy);

  for (let i of node.neighbors) {
    copy.neighbors.push(dfs(i, oldToNew));
  }

  return copy;
}

module.exports = { cloneGraph, dfs };
