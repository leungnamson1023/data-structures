var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = Object.create(queueMethods);
  storage.key = 0;
  storage.items = {};
  return storage;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.items[this.key] = value; 
  this.key++; 
};

queueMethods.dequeue = function(){
  var min;
  for (var key in this.items){
    if(parseInt(key) < min || min === undefined){
      min = key;
    }
  }
  var deleted = {};
  deleted[0] = this.items[min];
  delete this.items[min];
  return deleted[0];
};

queueMethods.size = function(){
  var counter = 0;
  for (var key in this.items){
    counter++;
  }
  return counter;
};
