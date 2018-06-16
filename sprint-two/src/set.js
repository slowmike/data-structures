var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

/**
 * add(item)
 * Input: a value
 * Output: none
 * Side Effects: if the item is not already in the set, adds it to the set
 * Constraints: item cannot be null and cannot already exist in the set
 * Time Complexity: O(1)
 */
setPrototype.add = function(item) {
  if (this._storage[item] === undefined && item !== null) {
    this._storage[item] = item;
  }
};

/**
 * contains(item)
 * Input: an item
 * Output: a boolean indicating if item is in the set
 * Side Effects: none
 * Constraints: none
 * Time Complexity: O(1)
 */
setPrototype.contains = function(item) {
  return this._storage[item] !== undefined;
};

/**
 * remove(item)
 * Input: a item
 * Output: none
 * Side Effects: removes the item from the set
 * Constraints: item is not null and item has to exist in the set
 * Time Complexity: O(1)
 */
setPrototype.remove = function(item) {
  if (this.contains(item)) {
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
