var BinarySearchTree = function(value) {
  this.value = value;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

BinarySearchTree.prototype.insert = function(value, object) {
  if (arguments.length < 2) {
    object = this;
  }

  if (value > object.value) {
    if (object.r) {
      this.insert(value, object.r);
    } else {
      this.right(value, object);
    }
  } else {
    if (object.l) {
      this.insert(value, object.l);
    } else {
      this.left(value, object);
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

BinarySearchTree.prototype.right = function(value, object) {
  var someObject = new BinarySearchTree(value);
  object.r = someObject;
};
//add a right object with value

BinarySearchTree.prototype.left = function(value, object) {
  var someObject = new BinarySearchTree(value);
  object.l = someObject;
};

//add a left object with valuen

BinarySearchTree.prototype.contains = function(value, object) {
//see if value = object.value
//check if value is greater or lesser than this.value
// if >, go right
//if <, go left
//recurse over contans function
  if (arguments.length < 2) {
    object = this;
  }

  if (value === object.value) {
    return true;
  } 

  if (value > object.value && object.r) {
    return this.contains(value, object.r);
  } else if (value < object.value && object.l) {
    return this.contains(value, object.l);
  } else {
    return false;
  }
};

BinarySearchTree.prototype.depthFirstLog = function(cb, obj) {

//apply callback on obj.value
//check if obj has branches and set branches count to treeNodes
//if treeNodes = 1
  //check if r exists
    //if yes, recurse over r
  //else if 
     // recurse over l
//if treenodes = 2
      //for loop over each node
//if treenodes = 0
   //return

  var treeNodes = 0;

  if (arguments.length < 2) {
    obj = this;
  }
  
  cb(obj.value);

  if (obj.r && obj.l) {
    treeNodes = 2;
  } else if (obj.r || obj.l) {
    treeNodes = 1;
  } 
//debugger;
  if (treeNodes === 2) {
    for (var i = 0; i < treeNodes; i++) {
      if (i === 0) {
        this.depthFirstLog(cb, obj.l);
      } else if (i === 1) {
        this.depthFirstLog(cb, obj.r);
      }
    }
  } else if (treeNodes === 1) {
    if (obj.r) {
      this.depthFirstLog(cb, obj.r);
    } else {
      this.depthFirstLog(cb, obj.l);
    }
  }
};