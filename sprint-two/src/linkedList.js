var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  





  list.findTail = function(someNode, value){
    if(someNode.next !== null) {
      return findTail(someNode.next);
    } else {
      someNode.next = Node(value);
      list.tail = someNode.next;
    }
  };

  list.findValue = function(node, target){
    if (node.value !== target && node.next !== null){
      return list.findValue(node.next, target);
    } else if(node.value === target){
      return true;
    }  
    return false;
  };

  list.addToTail = function(value) {

    if (list.head === null){
      list.head = Node(value);

      list.tail = list.head;

    } else {
      list.findTail(list.head, value);
    }
  };

  list.removeHead = function() {
    var deletedHeadValue = list.head.value;
    list.head = list.head.next;
    return deletedHeadValue;
  };

  list.contains = function(target) {
    return list.findValue(list.head, target);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
