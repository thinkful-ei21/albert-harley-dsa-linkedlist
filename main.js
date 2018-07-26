'use strict';

const {LinkedList, CycleList} = require('./linkedlist');

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

  function size(linkedlist) {
    return linkedToArray(linkedlist).length;
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

  function reverseList(linkedlist) {
    if(linkedlist.head === null) {
      console.log('List is empty');
      return;
    }
  
    if(linkedlist.head.next === null) {
      console.log('There is only one item in the list');
      return;
    }
  
    let current_node = linkedlist.head.next;
    let prev_node = linkedlist.head;
    prev_node.next = null;
    let next_node = null;
  
    while(current_node) {
      next_node = current_node.next;
      current_node.next = prev_node;
      if (next_node === null) {
        linkedlist.head = current_node;
      }
      prev_node = current_node;
      current_node = next_node;
    }
  }

  function thirdFromEnd(linkedlist) {
    const arrayVersion = linkedToArray(linkedlist);
    if (arrayVersion.length < 3) {
      console.log('List is too small');
      return null;
    }
    return linkedlist.find(arrayVersion[arrayVersion.length-3]);
  }

  function middleOfList(linkedlist) {
    const arrayVersion = linkedToArray(linkedlist);
    const length = arrayVersion.length;
    
    if (length === 0) {
      console.log('List is empty');
      return null;
    }
    //[1,2,3,4,5]
    //[1,2,3,4]
    return linkedlist.find(arrayVersion[Math.floor(arrayVersion.length/2)]);
  }

  function cycleInList(linkedlist) {
    if (linkedlist.head === null) {
      console.log('List is empty');
      return false;
    }
    const visited = [];
    let current_node = linkedlist.head;
    while (current_node.next !== null) {
      if(visited.includes(current_node.next)) {
        return true;
      }
      visited.push(current_node.next);
      current_node = current_node.next;
    }
    return false; 
  }

  console.log(size(SLL));
  console.log(isEmpty(SLL));
  console.log(isEmpty(new LinkedList()));
  console.log(findPrevious(SLL, 'Helo'));
  console.log(findLast(SLL));
  reverseList(SLL);
  display(SLL);
  console.log(thirdFromEnd(SLL));
  console.log(middleOfList(SLL));
  const SLL2 = new LinkedList();
  console.log(middleOfList(SLL2));
  SLL2.insertBefore('testing');
  console.log(middleOfList(SLL2));
  SLL2.insertBefore('testing');
  SLL2.insertBefore('testing');
  const CLL = new CycleList();
  console.log(cycleInList(CLL));
  console.log(cycleInList(SLL2));
  
}

main();

function WhatDoesThisProgramDo(lst){
  let current = lst.head;
  //This outer loop iterates through unique list after it's been modified by inner loop for each step
  while(current !== null){
    let newNode = current;
    //This inner while loop removes all nodes with the same value as current node
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      }
      else{
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}

//WhatDoesThisProgramDo eliminates duplicate values from a linked list.  It will iterate about n + n-1 + n-2... + 1,  where n
//is the number of elements in the linked list.  So it is worse than O(n) but better than O(n^2).


