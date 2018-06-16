
var HashTable = function() {
  this._limit = 8;
  this._numEntries = 0;
  this._storage = LimitedArray(this._limit);
};

/**
 * insert(k,v)
 * Input: a key and its associated value
 * Output: none
 * Side Effects: takes a key value pair, hashes the key to find an appriate index
 * appends the pair to the array at index
 * Constraints: key cannot be null
 * Time Complexity: O(1)
 */
HashTable.prototype.insert = function(k, v) {
  if (k !== null) {
    var index = getIndexBelowMaxForKey(k, this._limit);
    if (loadFactor(this._numEntries + 1, this._limit) >= 75) {
      var oldTuples = [];
      this._storage.each(function(bucket, index, storage) {
        for (pair in bucket) {
          oldTuples.push(pair);
        }
      });
      //double the storage size
      this._limit *= 2;
      this._storage = LimitedArray(this._limit);
      this._numEntries = 0;
      for (pair in oldTuples) {
        this.insert(pair[0], pair[1]);
      }
    }

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
  }
};

/**
 * retrieve(k)
 * Input: a key
 * Output: the value associated with the key in the HashTable
 * Side Effects: none
 * Constraints: key must not be null and must exist in the HashTable
 * Time Complexity: O(n) where n is the size of the bucket at index, O(1) with respect to the size of the HashTable
 */
HashTable.prototype.retrieve = function(k) {
  if (k === null) {
    return undefined;
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) !== undefined) {
    for (var tuple of this._storage.get(index)) {
      if (tuple[0] === k) {
        return tuple[1];
      }
    }
  }
};

/**
 * remove(k)
 * Input: a key
 * Output: none
 * Side Effects: finds the key value pair associated with key and removes it from the hash table
 * Constraints: key must exist in the HashTable
 * Time Complexity: O(n) where n is the size of the bucket at index, O(1) with respect to the size of the HashTable
 */
HashTable.prototype.remove = function(k) {

  if (loadFactor(this._numEntries - 1, this._limit) <= 25 && this._limit > 8) {
    var oldTuples = [];
    this._storage.each(function(bucket, index, storage) {
      for (pair in bucket) {
        oldTuples.push(pair);
      }
    });
    //half the storage size
    this._limit = this._limit / 2;
    this._storage = LimitedArray(this._limit);
    this._numEntries = 0;
    for (pair in oldTuples) {
      this.remove(pair[0]);
    }
  }

  var index = getIndexBelowMaxForKey(k, this._limit);
  //set bucket at the index ok k to be sliced
  var bucket = this._storage.get(index);
  for (var i in bucket) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
  }
  this._numEntries --;

};

/**
 * loadFactor(entries, limit)
 * Input: then number of items in the HashTable and the limit of the table
 * Output: returns a number representing the loadFactor, in percentage
 * Side Effects: none
 * Constraints: limit cannot be 0
 * Time Complexity: O(1)
 */
var loadFactor = function(entries, limit) {
  return (entries / limit) * 100;
};




/*
 * Complexity: What is the time complexity of the above functions?
*/
