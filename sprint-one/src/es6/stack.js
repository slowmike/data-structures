class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.stackSize = 0;
  }

  push(value) {
    this.storage[this.stackSize] = value;
    this.stackSize++;
  }
  
  pop() {
    if (this.stackSize > 0) {
      var topVal = this.storage[this.stackSize - 1];
      delete this.storage[this.stackSize - 1];
      this.stackSize--; 
      return topVal;
    }
  }
  
  size() {
    return this.stackSize;
  }
}