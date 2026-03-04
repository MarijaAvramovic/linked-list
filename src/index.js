 

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
 
  tail() {
    return 
  }

  tail() {
    if (!this.headNode) return undefined;

    let current = this.headNode;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current.value;
  }

  at(index) {
    if (index < 0 || index >= this._size) return undefined;

    let current = this.headNode;
    let count = 0;

    while (current !== null) {
      if (count === index) {
        return current.value;
      }
      current = current.nextNode;
      count++;
    }
    return undefined;  
  }
  
  pop() {
    if (!this.headNode) return undefined;

    if (this._size === 1) {
      const value = this.headNode.value;
      this.headNode = null;
      this._size = 0;
      return value;
    }

    let current = this.headNode;
    let prev = null;

    while (current.nextNode !== null) {
      prev = current;
      current = current.nextNode;
    }

    prev.nextNode = null;
    this._size--;
    return current.value;
  }

    contains(value) {
    let current = this.headNode;

    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

 findIndex(value) {
    let current = this.headNode;
    let index = 0;

    while (current !== null) {
      if (current.value === value) {
        return index;
      }
      current = current.nextNode;
      index++;
    }
    return -1;
  }

  toString() {
    if (!this.headNode) return "";

    let result = [];
    let current = this.headNode;

    while (current !== null) {
      result.push(`( ${current.value} )`);
      current = current.nextNode;
    }

    result.push("null");
    return result.join(" -> ");
  }
}
 


  class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

 const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());