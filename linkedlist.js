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

    if (this.head === item) {
      this.head = this.head.next;
      return;
    }

    let current_node = this.head;
    let prev_node = this.head;

    while (current_node.next !== null) {
      prev_node = current_node;
      current_node = current_node.next;
      if (current_node === item) {
        prev_node.next = current_node.next;
        return;
      }
    }

    console.log('Item not found');
    return;

  }

}

module.exports = LinkedList;