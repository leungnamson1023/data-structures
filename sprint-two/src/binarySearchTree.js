var BinarySearchTree = function(value) {
  this.tree = {};
  this.tree.value = value;
  
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

BinarySearchTree.prototype.insert = function(value, object) {
debugger;
  if (arguments.length < 2) {
    object = this.tree;
  }

  if (value > this.tree.value) {
    if (this.tree.right) {
      this.insert(value, this.tree.right);
    } else {
      this.right(value, this.tree);
    }
  } else {
    if (this.tree.left) {
      this.insert(value, this.tree.left);
    } else {
      this.left(value, this.tree);
    }
  }
};
//check the NodesValue
//if value is less than SearchTreesValue, check if left has an object
  //if yes, pass that object to insert, start at 11 again
  //if no, call left
//else if greater than SearchTreesValue, call if right has on object
  //if yes, pass that object to insert, start at 11 again
  //if no, call right



//helperfunction
var lastNodeChecker = function(value){

};

BinarySearchTree.prototype.right = function(value, object) {
  var someObject = new BinarySearchTree(value);
  object.right = someObject.tree;
};
//add a right object with value

BinarySearchTree.prototype.left = function(value, object) {
  var someObject = new BinarySearchTree(value);
  object.left = someObject.tree;
};

//add a left object with valuen

BinarySearchTree.prototype.contains = function() {};

BinarySearchTree.prototype.depthFirstLog = function() {};