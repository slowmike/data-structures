var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.queueSize = 0;
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.queueSize] = value;
  this.queueSize++;
}

queueMethods.dequeue = function(value) {
  if(this.queueSize > 0) {
    var nextVal = this.storage[0];
    for(var i = 1; i < this.queueSize; i++) {
      this.storage[i-1] = this.storage[i];
    }
    delete this.storage[this.queueSize-1]
    this.queueSize--;
    return nextVal;
  }
}

queueMethods.size = function(value) {
  return this.queueSize;
}