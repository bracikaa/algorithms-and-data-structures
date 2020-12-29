class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    let current = this.head;
    let tailNode = current;

    while (current.next) {
      tailNode = current;
      current = current.next;
    }

    this.tail = tailNode;
    this.tail.next = null;
    this.length--;

    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    let currHead = this.head;
    this.head = currHead.next;
    this.length--;

    if (this.length == 0) {
      this.tail = null;
    }

    return currHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(currIndex) {
    if (currIndex < 0 || currIndex >= this.length) {
      return null;
    }

    let counter = 0;
    let currElement = this.head;
    while (counter !== currIndex) {
      currElement = currElement.next;
      counter++;
    }

    return currElement;
  }

  set(index, value) {
    let node = this.get(index);

    if (!node) {
      return false;
    }

    node.val = value;
    return true;
  }
}

let list = new SinglyLinkedList();
list.push("0");
list.push("1");
list.push("2");
list.push("3");
console.log(list.get(2));
console.log(list.get(-2));
console.log(list.get(22));
console.log(list.set(6, "FAIL"));
console.log(list.set(1, "SET VALUE"));
