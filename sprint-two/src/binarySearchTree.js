var BinarySearchTree = function(value) {
  var newBST = {};
  newBST.value = value; //  root
  newBST.left = undefined; // instance of a tree
  newBST.right = undefined; // instance of a tree
  _.extend(newBST, binaryTreeMethods);

  return newBST;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(num) {

  //the tree is populated with some item
  if (num < this.value && num !== null) {
    if (this.left !== undefined) {
      this.left.insert(num);
    } else {
      this.left = BinarySearchTree(num);
    }
  } else {
    if (this.right !== undefined) {
      this.right.insert(num);
    } else {
      this.right = BinarySearchTree(num);
    }
  }
};

binaryTreeMethods.contains = function(num) {
  if (num < this.value) {
    if (this.left !== undefined) {
      return this.left.contains(num);
    }
  }
  if (num > this.value) {
    if (this.right !== undefined) {
      return this.right.contains(num);
    }
  }

  return this.value === num;
};

binaryTreeMethods.depthFirstLog = function(cb) {
  cb(this.value);

  if (this.left !== undefined) {
    this.left.depthFirstLog(cb);
  }

  if (this.right !== undefined) {
    this.right.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
