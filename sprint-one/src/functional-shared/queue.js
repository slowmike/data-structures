var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {};
  queue.storage = {};
  queue.queueSize = 0;
  _.extend(queue, queueMethods);
  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.queueSize] = value;
  this.queueSize++;
};

queueMethods.dequeue = function(value) {
  if (this.queueSize > 0) {
    var nextVal = this.storage[0];
    for (var i = 1; i < this.queueSize; i++) {
      this.storage[i - 1] = this.storage[i];
    }
    delete this.storage[this.queueSize - 1];
    this.queueSize--;
    return nextVal;
  }
};

queueMethods.size = function(value) {
  return this.queueSize;
};