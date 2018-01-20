

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
  this.counter = 0;
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[this.counter] = node;
  
  this.counter++;
  // console.log("counter: ", this.counter);
  // console.log("nodes: ", this.nodes);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this.nodes) {
    if (this.nodes[key] === node) {
      return true;
    }
  } 
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var key in this.nodes) {
    if (this.nodes[key] === node) {
      delete this.nodes[key];
    }
  } 
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var key in this.nodes) {
    if (this.nodes[key] === fromNode) {
      var fromNodeKey = key;
    }
    if (this.nodes[key] === toNode) {
      var toNodeKey = key;
    }
  }

  var edgeStringCombo1 = '"' + toNodeKey + fromNodeKey +'"';
  var edgeStringCombo2 = '"' + fromNodeKey + toNodeKey +'"';

  if (this.edges.indexOf(edgeStringCombo1) >= 0 || this.edges.indexOf(edgeStringCombo2) >= 0){
    return true;
  } else {
    return false;
  }

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  for (var key in this.nodes) {
    if (this.nodes[key] === fromNode) {
      var fromNodeKey = key;
    }
    if (this.nodes[key] === toNode) {
      var toNodeKey = key;
    }
  }

  this.edges.push('"' + toNodeKey + fromNodeKey +'"');
  this.edges.push('"' + fromNodeKey + toNodeKey +'"');
  // console.log("edges: ", this.edges);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var key in this.nodes) {
    if (this.nodes[key] === fromNode) {
      var fromNodeKey = key;
    }
    if (this.nodes[key] === toNode) {
      var toNodeKey = key;
    }
  }
  var edgeStringCombo1 = '"' + toNodeKey + fromNodeKey + '"';
  var edgeStringCombo2 = '"' + fromNodeKey + toNodeKey + '"';

  if (this.edges.indexOf(edgeStringCombo1) >= 0) {
    var edgeIndexCombo1 = this.edges.indexOf(edgeStringCombo1);
    this.edges.splice(edgeStringCombo1, 1);
  } 
  if (this.edges.indexOf(edgeStringCombo2) >= 0) {
    var edgeIndexCombo2 = this.edges.indexOf(edgeStringCombo2);
    this.edges.splice(edgeStringCombo2, 1);
  }
//

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    cb(this.nodes[key]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 *///


