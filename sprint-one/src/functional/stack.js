var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var size = 0;
  someInstance.push = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.pop = function() {
    if(size > 0) {
      var topVal = storage[size-1];
      delete storage[size-1];
      size--;
      return topVal;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
