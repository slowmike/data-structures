var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var size = 0;
  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function() {
    if (size > 0) {
      var nextVal = storage[0];
      for (var i = 1; i < size; i++) {
        storage[i - 1] = storage[i];
      }
      delete storage[size - 1];
      size--;
      return nextVal;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
