'use strict';

const LinkedList = require('./linkedlist');

function main() {

  const SLL = new LinkedList();
  const items = ['Apollo', 'Boomer', 'Helo', 'Husker', 'Starbuck'];
  items.forEach(item => SLL.insertFirst(item));
  display(SLL);
  SLL.insertFirst('Tauhida');
  display(SLL);
  SLL.remove('squirrel');
  SLL.insertBefore('Athena','Boomer');
  display(SLL);
  SLL.insertAfter('Hotdog', 'Helo');
  display(SLL);
  SLL.insertAt('Kat', 1);
  display(SLL);
  SLL.remove('Tauhida');
  display(SLL);

  function display(linkedlist) {
    const output = [];
    let current_node = linkedlist.head;
    while(current_node) {
      output.push(current_node.value);
      current_node = current_node.next;
    }
    console.log(output);
    return output;
  }

  function size(linkedlist) {
    return display(linkedlist).length;
  }

  function isEmpty(linkedlist) {
    return linkedlist.head === null;
  }

  function findPrevious(linkedlist, item) {
    if(linkedlist.head === null) {
      console.log('The list is empty');
      return null;
    }

    if (linkedlist.head.next === null) {
      console.log('The list only has one element');
      return null;
    }

    if (linkedlist.head.value === item) {
      console.log('The node containing the value is at index 0');
      return null;
    }

    let current_node = linkedlist.head.next;
    let prev_node = linkedlist.head;

    while(current_node) {
      if (current_node.value === item) {
        return prev_node;
      }
      prev_node = current_node;
      current_node = current_node.next;
    }
    console.log('Item not found');
    return null;
  }

  function findLast(linkedlist) {
    if(linkedlist.head === null) {
      console.log('The list is empty');
      return null;
    }

    let current_node = linkedlist.head;

    while(current_node.next !== null) {
      current_node = current_node.next;
    }
    return current_node;
  }

  console.log(size(SLL));
  console.log(isEmpty(SLL));
  console.log(isEmpty(new LinkedList()));
  console.log(findPrevious(SLL, 'Helo'));
  console.log(findLast(SLL));
}

main();