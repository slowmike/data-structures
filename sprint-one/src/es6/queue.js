class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.queueSize = 0;
  }

  enqueue(value) {
    this.storage[this.queueSize] = value;
    this.queueSize++;
  }
  
  dequeue() {
    if (this.queueSize > 0) {
      var nextVal = this.storage[0];
      for (var i = 1; i < this.queueSize; i++) {
        this.storage[i - 1] = this.storage[i];
      }
      this.queueSize--;
      return nextVal;
    }
  }
  size() {
    return this.queueSize;
  }
}
