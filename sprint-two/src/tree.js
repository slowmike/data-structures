var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

/**
 * addChild(value)
 * Input: value to be inserted
 * Output: no output
 * Side Effects: creates new Tree object to be pushed to current Tree's children
 * Constraints: if value given is null, do nothing
 * Time Complexity: O(1)
 */
treeMethods.addChild = function(value) {
  if (value !== null) {
    var node = Tree(value);
    this.children.push(node);
  }
};

/**
 * contains(target value)
 * Input: target value to be found in Tree
 * Output: boolean, true if target is found, false otherwise
 * Side Effects: no side effect
 * Constraints: no constraint
 * Time Complexity: O(n)
 */
treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }

  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 * addChild ---> O(1)
 * contains ---> O(n)
 */
