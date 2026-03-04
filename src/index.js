import "./styles.css";

class LinkedList {
  constructor() {
    this.headNode = null;
    this._size = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.headNode) {
      this.headNode = newNode;
    } else {
      let current = this.headNode;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }

    this._size++;
  }
}

prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.headNode;
    this.headNode = newNode;
    this._size++;
  }

  size() {
    return this._size;
  }

  head() {
    return this.headNode ? this.headNode.value : undefined;
  }
 
 



  class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}


 append(value) adds a new node containing value to the end of the list.
