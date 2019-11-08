'use strict';

class _DoublyNode {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.previous = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst(value){
    let newNode = new _DoublyNode(value, this.head, null);
    if (this.head !== null){
      this.head.previous = newNode;
    }
    this.head = newNode;
    if(this.tail === null){
      this.tail = newNode;
    }
  }

  insertLast(value){
    let newNode = new _DoublyNode(value, null, this.tail);
    
    if(this.tail !== null){
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if(this.head === null){
      this.head = newNode;
    }
  }

  insertAfter(value, prevValue){
    let currNode = this.head;

    while(currNode.value !== prevValue){
      if(currNode === null){
        console.log('Item not found');
        return;
      }
      currNode = currNode.next;
    }
    if(currNode === this.tail){
      this.insertLast(value);
    }
    else{
      let newNode = new _DoublyNode(value, currNode.next, currNode);
      currNode.next.previous = newNode;
      currNode.next = newNode;
    }
  }

  remove(value){
    if(!this.head){
      return null;
    }
    let currNode = this.head;
    while(currNode.value !== value){
      currNode = currNode.next;
      if(currNode === null){
        console.log('Item does not exist');
        return;
      }
    }
    if(currNode === this.head){
      this.head = currNode.next;
    }
    else{
      currNode.previous.next = currNode.next;
    }
    if(currNode === this.tail){
      this.tail === currNode.previous;
    }
    else{
      currNode.next.previous = currNode.previous;
    }
  }

}

function mainDoubly(){
  let DLL = new DoublyLinkedList;

  DLL.insertFirst('A');
  DLL.insertLast('B');
  DLL.insertLast('C');
  DLL.insertLast('D');
  DLL.insertLast('E');


  return DLL;

}

function display(list){
  let currNode = list.head;
  while(currNode !== null){
    console.log(currNode.value);
    currNode = currNode.next;
  }
}

function getSize(list){
  let currNode = list.head;
  let counter = 0;
  while(currNode !== null){
    currNode = currNode.next;
    counter++;
  }

  return counter;
}

function reverseDLL(lst){
  let currNode = lst.head;
  let tempNode = null;
  
  while (currNode !== null) {
    //swapping nodes
    tempNode = currNode.next;
    currNode.next = currNode.previous;
    currNode.previous = tempNode;

    currNode = tempNode;
  }
  tempNode = lst.head;
  lst.head = lst.tail;
  lst.tail = tempNode;
  return lst;
}

console.log(display(reverseDLL(mainDoubly())));