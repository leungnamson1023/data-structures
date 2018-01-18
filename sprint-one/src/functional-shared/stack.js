var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  storage.key = 0;
  storage.items = {};
  
  _.extend(storage, stackMethods);

  return storage;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.items[this.key] = value;
  this.key++;
};

stackMethods.pop = function() {
  var max;
  for (var key in this.items) {
    if (parseInt(key) > max || max === undefined) {
      max = key;
    }
  }
  var deleted = {};
  deleted[0] = this.items[max];
  delete this.items[max];
  return deleted[0];
};

stackMethods.size = function() {
  var counter = 0;
  for (var key in this.items) {
    counter++;
  }
  return counter;
};