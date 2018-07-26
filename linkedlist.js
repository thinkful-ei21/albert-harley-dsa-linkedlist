'use strict';

class _Node {
  constructor(value, next) {
    this.value=value;
    this.next=next;
  }
}

class LinkedList {
  
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {

    if(this.head === null) {
      this.insertFirst(item);
    } else {
      let current_node = this.head;
      while(current_node.next !== null) {
        current_node = current_node.next;
      }
      current_node.next = new _Node(item, null);
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
      return;
    }

    let current_node = this.head;
    let prev_node = this.head;

    while (current_node.next !== null) {
      prev_node = current_node;
      current_node = current_node.next;
      if (current_node.value === item) {
        prev_node.next = current_node.next;
        return;
      }
    }

    console.log('Item not found');
    return;

  }

  insertBefore(item, key) {

    const new_node = new _Node(item, null);

    if (this.head === null) {
      this.head = new_node;
      return;
    }

    let current_node = this.head;
    let prev_node = this.head;

    while(current_node.value !== key) {
      if (current_node.next === null) {
        prev_node.next = new_node;
        return;
      } else {
        prev_node = current_node;
        current_node = current_node.next;
      }
    }

    prev_node.next = new_node;
    new_node.next = current_node;
    
  }

  insertAfter(item, key) {

    const new_node = new _Node(item, null);

    if (this.head === null) {
      this.head = new_node;
      return;
    }

    let current_node = this.head;

    while(current_node.value !== key) {
      if (current_node.next === null) {
        current_node.next = new_node;
        return;
      } else {
        current_node = current_node.next;
      }
    }

    current_node.next = new_node;
    
  }

  insertAt(item, n) {
    if(n === 0) {
      this.insertFirst(item);
      return;
    }

    let i = 0;
    let current_node = this.head;
    let prev_node = this.head;

    if (current_node === null) {
      console.log('Index out of range');
      return;
    }

    while(i < n) {
      if (current_node.next === null) {
        console.log('Index out of range');
        return;
      }
      prev_node = current_node;
      current_node = current_node.next;
      i++;
    }

    prev_node.next = new _Node(item, current_node.next);
    return;
  }

}

module.exports = LinkedList;