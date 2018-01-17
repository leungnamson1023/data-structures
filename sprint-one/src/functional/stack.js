var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var key = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[key] = value;
    key++;
  };

  someInstance.pop = function() {
    var max;
    for (var key in storage) {
      if (parseInt(key) > max || max === undefined) {
        max = key;
      }
    }
    var deleted = {};
    deleted[0] = storage[max];
    delete storage[max];
    return deleted[0];
  };

  someInstance.size = function() {
    var counter = 0;
    for (var key in storage) {
      counter++;
    }
    return counter;
  };

  return someInstance;
};
