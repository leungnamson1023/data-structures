class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.storage.items = {};
    this.storage.key = 0;
  }

  enqueue(value){
    this.storage.items[this.storage.key] = value;
    this.storage.key++;
  }
  
  dequeue(){
    var min;
    for (var key in this.storage.items){
      if(parseInt(key) < min || min === undefined ) {
        min = key;
      }
    }
    var deleted = {};
    deleted[0] = this.storage.items[min];
    delete this.storage.items[min];
    return deleted[0];
  }

  size(){
    var counter = 0;
    for (var key in this.storage.items){
      counter++;
    }
    return counter;
  }

}
