

// Instantiate a new graph
var Graph = function() {
  this.myNodes = {}; // all the nodes contained in this graph, key is node value, value is the node itself

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  if (node !== null) {
    var newNode = new GraphNode(node);
    this.myNodes[node] = newNode;
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.myNodes[node] !== undefined;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var edgeList = this.myNodes[node].edges;
  for (var edge in edgeList) {
    this.removeEdge(node, edge);
  }
  delete this.myNodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var edges = this.myNodes[fromNode].edges;
  return edges[toNode] !== undefined;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //add the edge in the edgelist of from nodes
  var from = this.myNodes[fromNode];
  var to = this.myNodes[toNode];

  from.edges[toNode] = toNode;
  to.edges[fromNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.myNodes[fromNode].edges[toNode];
  delete this.myNodes[toNode].edges[fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
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
