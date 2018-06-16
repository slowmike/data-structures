

// Instantiate a new graph
var Graph = function() {
  this.myNodes = {}; // all the nodes contained in this graph, key is node value, value is the node itself

};

/**
 * addNode(node)
 * Input: value, representing the value of the node to be added
 * Output: nothing
 * Side Effects: Creates a new GraphNode with the value passed into the fcn and adds it to the graph
 * Constraints: node cannot be null and node cannot be a repeat
 * Time Complexity: O(1)
 */
Graph.prototype.addNode = function(node) {
  if (node !== null) {
    var newNode = new GraphNode(node);
    this.myNodes[node] = newNode;
  }
};

/**
 * contains(target node)
 * Input: a value representing the desired node to be found
 * Output: boolean value indicating if the value passed to contains is represented in the graph.
 * Side Effects: none
 * Constraints: none
 * Time Complexity: O(1)
 */
Graph.prototype.contains = function(node) {
  return this.myNodes[node] !== undefined;
};

/**
 * removeNode(target node)
 * Input: a value representing the desired node to be removed
 * Output: none
 * Side Effects: removes the node with the value passed in from the graph object's node list and removes the associated edges of the node
 * Constraints: if the node does not exist, do nothing
 * Time Complexity: O(n), where n is the number of edges
 */
Graph.prototype.removeNode = function(node) {
  var edgeList = this.myNodes[node].edges;
  for (var edge in edgeList) {
    this.removeEdge(node, edge);
  }
  delete this.myNodes[node];
};

/**
 * hasEdge(fromNode, toNode)
 * Input: the value of the first and second nodes
 * Output: boolean value indicating if the two nodes share an edge
 * Side Effects: none
 * Constraints: both nodes should exist in the graph
 * Time Complexity: O(1)
 */
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var edges = this.myNodes[fromNode].edges;
  return edges[toNode] !== undefined;
};

/**
 * addEdge(fromNode, toNode)
 * Input: the value of the first and second nodes
 * Output: none
 * Side Effects: adds an edge between the 2 nodes, AKA updates each node's edges property to reflect the new connection
 * Constraints: both nodes must exist
 * Time Complexity: O(1)
 */
Graph.prototype.addEdge = function(fromNode, toNode) {
  //add the edge in the edgelist of from nodes
  var from = this.myNodes[fromNode];
  var to = this.myNodes[toNode];

  from.edges[toNode] = toNode;
  to.edges[fromNode] = fromNode;
};

/**
 * removeEdge(fromNode, toNode)
 * Input: the value of the first and second nodes
 * Output: none
 * Side Effects: removes an edge between the 2 nodes, AKA updates each node's edges property to reflect the lost connection
 * Constraints: both nodes must exist
 * Time Complexity: O(1)
 */
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.myNodes[fromNode].edges[toNode];
  delete this.myNodes[toNode].edges[fromNode];
};

/**
 * addEdge(fromNode, toNode)
 * Input: the value of the first and second nodes
 * Output: none
 * Side Effects: adds an edge between the 2 nodes, AKA updates each node's edges property to reflect the new connection
 * Constraints: both nodes must exist
 * Time Complexity: O(1)
 */
Graph.prototype.forEachNode = function(cb) {
  for (var node in this.myNodes) {
    cb(node);
  }
};

var GraphNode = function(value) {
  this.value = value;
  this.edges = {}; //edgelist where key is stringified number and value is the value of the connected node
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
