var BinarySearchTree = function(value) {
  var newBST = {};
  newBST.value = value; //  root
  newBST.left = undefined; // instance of a tree
  newBST.right = undefined; // instance of a tree
  _.extend(newBST, binaryTreeMethods);

  return newBST;
};

var binaryTreeMethods = {};

/**
 * insert(num)
 * Input: a number to add to the BST
 * Output: none
 * Side Effects: using the Binary Tree rule, num is added as a child to the tree
 * Constraints: num cannot be null and cannot already exist in the BST
 * Time Complexity: O(log n)
 */
binaryTreeMethods.insert = function(num) {

  //the tree is populated with some item
  if (num !== null) {
    if (num < this.value) {
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
  }

};

/**
 * contains(num)
 * Input: a number to be found in the BST
 * Output: A boolean indicating if num was found in the BST
 * Side Effects: none
 * Constraints: num cannot be null
 * Time Complexity: O(log n)
 */
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

/**
 * depthFirstLog(cb)
 * Input: a callback function
 * Output: none
 * Side Effects: invokes the callback on every node in the tree, in a DFS order
 * Constraints: callback cannot be null
 * Time Complexity: O(n)
 */
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
