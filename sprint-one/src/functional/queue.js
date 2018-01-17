var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var key = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[key] = value;
    key++;
  };

  someInstance.dequeue = function() {
    var min;

    for (var key in storage){
      if(parseInt(key) < min || min === undefined){
        min = key;
      }
    }
    var deleted = {};
    deleted[0] = storage[min];
    delete storage[min];
    return deleted[0];
  };

  someInstance.size = function() {
    var counter = 0;
    for (var key in storage){
      counter++;
    }
    return counter;
  };

  return someInstance;
};
