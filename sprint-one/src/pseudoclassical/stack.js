var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.storage.items = {};
  this.storage.key = 0;


};





Stack.prototype.push = function(value) {
  this.storage.items[this.storage.key] = value;
  this.storage.key++;
};

Stack.prototype.pop = function() {
  var max;
  for (var key in this.storage.items) {
    if (parseInt(key) > max || max === undefined) {
      max = key;
    }
  }
  var deleted = {};
  deleted[0] = this.storage.items[max];
  delete this.storage.items[max];
  return deleted[0];
};

Stack.prototype.size = function() {
  var counter = 0;
  for (var key in this.storage.items) {
    counter++;
  }
  return counter;
};


