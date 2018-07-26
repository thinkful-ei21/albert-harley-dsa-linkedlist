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

  const DLL = new DoubleList();
  const items = ['Aquaria', 'Caprica', 'Gemenon', 'Picon', 'Sagittaron'];
  items.forEach(item => DLL.insertFirst(item));
  display(DLL);
  DLL.insertAfter('Tauron', 'Gemenon');
  display(DLL);
  DLL.remove('Picon');
  display(DLL);
}

mainDLL();