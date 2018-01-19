var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

// treeMethods.contains = function(target, parent) {
//   if (arguments.length < 2) {
//     var parent = this;
//   }
//   if (this.children.length === 0) {
//     return false;
//   } else if (this.value === target) {
//     return true;
//   } else if (this.children.length > 0) {
//     console.log(this);
//     for (var i = 0; i < this.children.length; i++) {
//       return this.contains(target, this.children[i]);
//     }
//     return false;
//   } 
// };

treeMethods.contains = function(target) {
  var result = false;

  var recursion = function(parent) {
    if (parent.value === target) {
      result = true;
    } else if (parent.children.length > 0) {
      for (var i = 0; i < parent.children.length; i++) {
        console.log(parent.children[i]);
        if (parent.children[i].value === target) {
          result = true;
        }
        recursion(parent.children[i]);
      }
    } 
  };
  recursion(this);
  return result;
};

// treeMethods.getChild = function(parent) {
//   return parent.children
// };

/*
 * Complexity: What is the time complexity of the above functions?
 */
