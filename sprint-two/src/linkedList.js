var LinkedList = function() {
  var list = {/** head : , tail: property*/}; //object filled with nodes, with special properties for head and tail
  list.head = null;//an instance of a node
  list.tail = null;// an instance of a node

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (value !== null) {
      if (list.head === null || list.tail === null) {
        list.head = newNode;
        list.tail = newNode;
      } else {
        list.tail.next = newNode;
        list.tail = newNode;
      }
    }
  };

  list.removeHead = function() {
    if (list.head === null) {
      return list.head;
    }

    var value = list.head.value;
    list.head = list.head.next;

    return value;
  };

  list.contains = function(target) {
    var current = list.head;
    while (current !== null) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

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
