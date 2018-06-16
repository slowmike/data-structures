

var HashTable = function() {
  this._limit = 8;
  this._numEntries = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //create a tuple that hold the key and the value
  var tuple = [k, v];
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, []);
  }
  var bucket = this._storage.get(index);

  var contains = false;
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i][1] = v;
      contains = true;
    }
  }
  if (!contains) {
    bucket.push(tuple);
  }
  this._numEntries++;

  //check if the number of entries + 1 exceeds the load limit
  if (loadFactor(this._numEntries, this._limit) >= 75) {
    //double the storage size
    this._limit *= 2;
    this._storage = LimitedArray(this._limit);
    rehash();
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) !== undefined) {
    for (var tuple of this._storage.get(index)) {
      if (tuple[0] === k) {
        return tuple[1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
  this._numEntries --;

  if (loadFactor(this._numEntries, this._limit) <= 25 && this._limit > 8) {
    this._limit = this._limit / 2;
    this._storage = LimitedArray(this._limit);
    rehash();
  }
};

//method that checks if we are reaching load limit or load floor, returns the load factor
var loadFactor = function(entries, limit) {
  return (entries / limit) * 100;
};
//method that rehashes everything
var rehash = function() {
  this._storage.each(getIndexBelowMaxForKey);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
