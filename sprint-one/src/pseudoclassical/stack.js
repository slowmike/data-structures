var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.stackSize = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.stackSize] = value;
  this.stackSize++;
}

Stack.prototype.pop = function() {
  if(this.stackSize > 0) {
    var topVal = this.storage[this.stackSize-1];
    delete this.storage[this.stackSize-1]; 
    this.stackSize--;
    return topVal;
  }
}

Stack.prototype.size = function() {
  return this.stackSize;
}