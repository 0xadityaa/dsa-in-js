const { cloneGraph } = require("../solutions/clone-graph");

// Definition for a _Node.
class _Node {
  constructor(val = 0, neighbors = []) {
    this.val = val;
    this.neighbors = neighbors;
  }
}

describe("cloneGraph", () => {
  test("should return null for an empty graph", () => {
    const result = cloneGraph(null);
    expect(result).toBeNull();
  });

  test("should clone a graph with a single node", () => {
    const node = new _Node(1);
    const result = cloneGraph(node);
    expect(result.val).toBe(1);
    expect(result.neighbors).toEqual([]);
  });

  test("should clone a graph with two connected nodes", () => {
    const node1 = new _Node(1);
    const node2 = new _Node(2);
    node1.neighbors.push(node2);
    node2.neighbors.push(node1);

    const result = cloneGraph(node1);
    expect(result.val).toBe(1);
    expect(result.neighbors.length).toBe(1);
    expect(result.neighbors[0].val).toBe(2);
    expect(result.neighbors[0].neighbors[0].val).toBe(1);
  });

  test("should clone a graph with multiple nodes and connections", () => {
    const node1 = new _Node(1);
    const node2 = new _Node(2);
    const node3 = new _Node(3);
    const node4 = new _Node(4);

    node1.neighbors.push(node2);
    node1.neighbors.push(node4);
    node2.neighbors.push(node1);
    node2.neighbors.push(node3);
    node3.neighbors.push(node2);
    node4.neighbors.push(node1);

    const result = cloneGraph(node1);
    expect(result.val).toBe(1);
    expect(result.neighbors.length).toBe(2);
    expect(result.neighbors[0].val).toBe(2);
    expect(result.neighbors[1].val).toBe(4);
    expect(result.neighbors[0].neighbors[1].val).toBe(3);
  });

  test("should handle a graph with cycles", () => {
    const node1 = new _Node(1);
    const node2 = new _Node(2);
    const node3 = new _Node(3);

    node1.neighbors.push(node2);
    node2.neighbors.push(node3);
    node3.neighbors.push(node1); // Cycle

    const result = cloneGraph(node1);
    expect(result.val).toBe(1);
    expect(result.neighbors.length).toBe(1);
    expect(result.neighbors[0].val).toBe(2);
    expect(result.neighbors[0].neighbors[0].val).toBe(3);
    expect(result.neighbors[0].neighbors[0].neighbors[0].val).toBe(1); // Cycle check
  });
});
