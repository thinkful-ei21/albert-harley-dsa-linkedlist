'use strict';

class _DNode {
  constructor(value, prev, next) {
    this.value=value;
    this.prev=prev;
    this.next=next;
  }
}

class DoubleList {
  
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst(item) {
    this.head = new _DNode(item, null, this.head);
    if (this.tail === null) {
      this.tail = this.head;
      return;
    }
    if(this.head.next !== null) {
      this.head.next.prev = this.head;
    }
  }

  insertLast(item) {

    this.tail = new _DNode(item, this.tail, null);
    if (this.head === null) {
      this.head = this.tail;
    }
    if(this.tail.prev !== null) {
      this.tail.prev.next = this.tail;
    }
  }

  find(item) {

    if (this.head === null) {
      return null;
    }

    let current_node = this.head;

    while(current_node.value !== item) {
      if (current_node.next === null) {
        return null;
      } else {
        current_node = current_node.next;
      }
    }

    return current_node;
  }

  remove(item) {

    if (this.head === null) {
      return;
    }

    if (this.head.value === item) {
      this.head = this.head.next;
      this.head.prev = null;
      return;
    }

    let current_node = this.head;

    while (current_node.next !== null) {
      current_node = current_node.next;
      if (current_node.value === item) {
        current_node.prev.next = current_node.next;
        current_node.next.prev = current_node.prev;
        return;
      }
    }

    console.log('Item not found');
    return;

  }

  insertBefore(item, key) {

    if (this.head === null) {
      this.head = new _DNode(item, null, this.head);
      return;
    }

    let current_node = this.head;

    while(current_node.value !== key) {
      if (current_node.next === null) {
        current_node.next = new _DNode(item, current_node, null);
        return;
      } else {
        current_node = current_node.next;
      }
    }

    current_node.prev = new _DNode(item, current_node.prev, current_node);
    current_node.prev.prev.next = current_node.prev;
    
  }

  insertAfter(item, key) {

    if (this.head === null) {
      this.head = new _DNode(item, this.head, null);
      return;
    }

    let current_node = this.head;

    while(current_node.value !== key) {
      if (current_node.next === null) {
        current_node.next = new _DNode(item, current_node, null);
        return;
      } else {
        current_node = current_node.next;
      }
    }

    current_node.next = new _DNode(item, current_node, current_node.next);
    if (current_node.next.next !== null) {
      current_node.next.next.prev = current_node.next;
    }
    
  }

  insertAt(item, n) {
    if(n === 0) {
      this.insertFirst(item);
      return;
    }

    let i = 0;
    let current_node = this.head;

    if (current_node === null) {
      console.log('Index out of range');
      return;
    }

    while(i < n) {
      if (current_node.next === null) {
        console.log('Index out of range');
        return;
      }
      current_node = current_node.next;
      i++;
    }

    current_node.prev.next = new _DNode(item, current_node.prev, current_node);
    current_node.prev = current_node.prev.next;
    return;
  }

}

module.exports = DoubleList;