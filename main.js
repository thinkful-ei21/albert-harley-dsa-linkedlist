'use strict';

const LinkedList = require('./linkedlist');

function main() {

  const SLL = new LinkedList();
  const items = ['Apollo', 'Boomer', 'Helo', 'Husker', 'Starbuck'];
  items.forEach(item => SLL.insertFirst(item));
  SLL.insertFirst('Tauhida');
  console.log(SLL);
  SLL.remove('squirrel');
  SLL.insertBefore('Athena','Boomer');
  console.log(SLL);
  SLL.insertAfter('Hotdog', 'Helo');
  console.log(SLL);
  SLL.insertAt('Kat', 1);
  console.log(SLL);
  SLL.remove('Tauhida');
  console.log(SLL);
}

main();