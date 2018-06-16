var LinkedList = function() {
  var list = {/** head : , tail: property*/}; //object filled with nodes, with special properties for head and tail
  list.head = null;//an instance of a node
  list.tail = null;// an instance of a node

  /**
   * addToTail(value)
   * Input : A value to be added to the LL
   * Output : No output
   * Side Effects : Creates a new node with value and adds that to the end of the LL
   *  The node then becomes the new tail of the LL
   * Constraints: Value cannot be null. if LL is empty Node(value) is both the head & tail
   * Time Complexity: O(1)
   */
  list.addToTail = function(value) {
    var newNode = Node(value);
    if (value === null) { return; }
    if (list.tail === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      newNode.prev = list.tail;
      list.tail.next = newNode;
      list.tail = list.tail.next;
    }
  };

  /**
   * removeHead()
   * Input : nothing
   * Output : the value that was removed
   * Side Effects: removes the current head node, and sets the old head's next as the new head
   * Constraints : if head is null (aka LL is empty), just return null
   * Time Complexity: O(1)
   */
  list.removeHead = function() {
    if (list.head === null) {
      return list.head;
    }

    var value = list.head.value;
    list.head = list.head.next;

    return value;
  };

  /**
   * contains(target value)
   * Input: a value representing the thing we are looking for in the LL
   * Output: a boolean, true if the value was found, false otherwise
   * Side Effects: nothing
   * Constraints: contains will return false automatically if the LL is empty
   * Time Complexity: O(n)
   */
  list.contains = function(target) {
    var current = list.head;
    while (current !== list.tail) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }
    return list.head !== null && current.value === target;
  };

  //doubly-linked-list------------
  list.addToHead = function(value) {
    var newNode = Node(value);
    if (value === null) { return; }
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      var current = this.head;
      current.prev = newNode;
      current.prev.next = current;
      this.head = newNode;
    }
  };

  list.removeTail = function() {
    if (list.tail === null) {
      return list.tail;
    }

    var value = list.tail.value;
    list.tail = list.tail.prev;

    return value;
  };
  //-----------------------------

  return list;

};



var Node = function(value) {
  var node = {};
  node.prev = null;//doubly-linked-list
  node.value = value;
  node.next = null; //an instance of a node

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail ---> O(1)
 * removeHead ---> O(1)
 * contains ---> O(n)
 */
