/**
 * Initialize your data structure here.
 */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var MyLinkedList = function () {
  this.head = null;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (!this.head || index < 0) {
    return -1;
  }

  let node = this.head;
  for (let i = 0; i < index; i++) {
    node = node.next;
    if (!node) return -1;
  }

  return node.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let newHead = new Node(val);
  newHead.next = this.head;
  this.head = newHead;
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let newNode = new Node(val);

  let node = this.head;
  // In the case there's no head yet
  if (!node) {
    this.head = newNode;
    return;
  }

  while (node) {
    if (node.next) {
      node = node.next;
    } else {
      node.next = newNode;
      return;
    }
  }
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0) return;

  let newNode = new Node(val);
  // if index is 0th, we'll make this new node the head
  if (index === 0) {
    newNode.next = this.head;
    this.head = newNode;
    return;
  }

  let node = this.head;
  for (let i = 0; i < index; i++) {
    if (!node.next) {
      // If index is greater than length of list, the node will not be inserted
      if (i + 1 < index) {
        console.log('index too long');
        return;
      } else if (i + 1 === index) {
        console.log('adding to the end');
        // Index happens to be the end
        node.next = newNode;
        return;
      }
    } else {
      if (i + 1 === index) {
        newNode.next = node.next;
        node.next = newNode;
        return;
      } else {
        node = node.next;
      }
    }
  }

  node.next = newNode;
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (!this.head || index < 0) return;

  // If the head gets deleted (0th index), we set head to null and lose the remaining nodes
  if (index === 0) {
    this.head = this.head.next;
    return;
  }

  let node = this.head;
  let prev = null;

  for (let i = 0; i < index; i++) {
    prev = node;
    node = node.next;
    if (!node) return;
  }

  if (!node.next) {
    prev.next = null;
  } else {
    prev.next = node.next;
  }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
