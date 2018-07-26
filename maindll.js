'use strict';

const DoubleList = require('./doublelist');

function mainDLL() {
  function linkedToArray(linkedlist) {
    const output = [];
    let current_node = linkedlist.head;
    while(current_node) {
      output.push(current_node.value);
      current_node = current_node.next;
    }
    return output;
  }
    
  function display(linkedlist) {
    console.log(linkedToArray(linkedlist));
  }

  function reverseList(linkedlist) {
    if(linkedlist.head === null) {
      console.log('List is empty');
      return;
    }
  
    let current_node = linkedlist.head;
    let temp_ptr = null;
    
    while(current_node) {
      temp_ptr = current_node.prev;
      current_node.prev = current_node.next;
      current_node.next = temp_ptr;
      if (current_node.prev === null) {
        linkedlist.head = current_node;
      }
      if(current_node.next === null) {
        linkedlist.tail = current_node;
      }
      current_node = current_node.prev;
    }
  }

  const DLL = new DoubleList();
  const items = ['Aquaria', 'Caprica', 'Gemenon', 'Picon', 'Sagittaron'];
  items.forEach(item => DLL.insertFirst(item));
  display(DLL);
  DLL.insertAfter('Tauron', 'Gemenon');
  display(DLL);
  DLL.remove('Picon');
  display(DLL);
  reverseList(DLL);
  display(DLL);
}

mainDLL();