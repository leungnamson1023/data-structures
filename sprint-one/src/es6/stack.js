class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.storage.key = 0;
    this.storage.items = {};
  }


  push(value) {
    this.storage.items[this.storage.key] = value;
    this.storage.key++;
  }


  pop() {
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
  }

  size() {
    var count = 0;
    for (var key in this.storage.items) {
      count++;
    }
    return count;
  }

}