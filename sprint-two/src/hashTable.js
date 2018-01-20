

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

//INSERT:
//get array at index using get helper method
//if empty, insert k,v in an array into another array
//if not empty, loop through all the arrays, check to see if 
  //key exists, if so, replace value
  //else if, not empty, and not key not in array, 
  //push k2, v2 in an array into the array

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var indexContents = this._storage.get(index);
  var arrayToAdd = [k, v];
  var firstArray = [];

  firstArray.push(arrayToAdd);

  if (indexContents === undefined) {
    this._storage.set(index, firstArray);
  } else {
    for (var i = 0; i < indexContents.length; i++) {
      if (indexContents[i][0] === k) {
        indexContents[i][1] = v;
      } else {
        indexContents.push(arrayToAdd);
      }
    }
    this._storage.set(index, indexContents);
  }
};

//retrieve
//use get to get contents at the index
//if not empty, iterate over each array to find key, retreive value

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var indexContents = this._storage.get(index);
 
  if (indexContents !== undefined) {
    for (var i = 0; i < indexContents.length; i++) {
      if (indexContents[i][0] === k) {
        return indexContents[i][1];
      }
    }
  }
};

//remove
//use get to get to the index
//loop through the arrays find key, change value to undefined

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var indexContents = this._storage.get(index);

  for (var i = 0; i < indexContents.length; i++) {
    if (indexContents[i][0] === k) {
      indexContents.splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
//complexity will be constant i.e. O(1)



