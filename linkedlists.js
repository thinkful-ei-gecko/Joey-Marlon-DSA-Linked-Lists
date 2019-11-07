'use strict';

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
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
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) {
    let currNode = this.head;

    if (!this.head) {
      return null;
    }

    while(currNode.value !== item) {
      if (currNode.next === null){
        return null;
      }
      else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item) {
    if (!this.head) {
      return null;
    }

    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    let currNode = this.head;
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      previousNode = currNode;
      currNode = currNode.next;
    }

    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }

  insertBefore(value, newValue) {
    if(this.find(value) === null){
      console.log('Item not found');
      return;
    }
    let beforeNode = this.find(value);
    let currNode = this.head;
 

    while(currNode.next !== beforeNode){
      currNode = currNode.next;
      console.log(currNode);
    }
    currNode.next = new _Node(newValue, beforeNode);
  }
  insertAfter(value, newValue){
    if(this.find(value) === null){
      console.log('Item not found');
      return;
    }
    let currNode = this.head;
    let afterNode = this.find(value);

    while(currNode !== afterNode){
      currNode = currNode.next;
    }
    currNode.next = new _Node(newValue, afterNode.next);
  }
  insertAt(num, newValue){
    let currNode = this.head;
    if(num === 1){
      this.head = new _Node(newValue, this.head);
      return;
    }  
    if(num >= 2){
      for(let i = 2; i < num; i++){
        currNode = currNode.next;
      }
    }
    currNode.next = new _Node(newValue, currNode.next);
  
  }
  
}

function main() {
  let SLL = new LinkedList();

  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Husker');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');

  SLL.insertLast('Tauhida');
  // SLL.insertBefore('Boomer', 'Athena');
  // SLL.insertAfter('Helo','Hotdog');
  // SLL.insertAt(2,'Kat');
  SLL.remove('Tauhida');
  // console.log(SLL.find('Tauhida'));
  return SLL;
  
}

function display(linkedList) {
  let currNode = linkedList.head;
  while(currNode !== null){
    console.log(currNode);
    currNode = currNode.next;
  }
}

function getSize(linkedList){
  let currNode = linkedList.head;
  let counter = 0;
  while(currNode !== null){
    currNode = currNode.next;
    counter++;
  }

  return counter;
}

function isEmpty(linkedList){
  if(linkedList.head === null){
    console.log('Linked list is empty');
    return;
  }
  console.log('Linked list is not empty');
}

function findPrevious(linkedList, value){
  let node = linkedList.find(value);
  let currentNode = linkedList.head;

  if(node === currentNode){
    console.log('Value is the first item of the linked list');
    return;
  }
  while(currentNode.next !== node){
    currentNode = currentNode.next;
  }

  return currentNode;
}

function findLast(linkedList){
  let currentNode = linkedList.head;

  while(currentNode.next !== null){
    currentNode = currentNode.next;
  }

  return currentNode;
}

//Question #4
function WhatDoesThisProgramDo(lst) {
  //assigns starting point to iterate through linked list
  let current = lst.head;

  while (current !== null) {
    //defines a newNode variable for a nested loop
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      }
      else {
        newNode = newNode.next;
      }
    }
    //iterates to the next item
    current = current.next;
  }
  return lst;
}
//The program removes duplicates from the linked list.
//This would have O(n^2) complexity because the nested loop causes the function to iterate through the list again for each value.

console.log(display(WhatDoesThisProgramDo(main())));
