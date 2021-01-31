class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

    return ++this.size;
  }

  pop() {
    if (this.length === 0) return null;

    let firstNode = this.first;

    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = firstNode.next;
    }

    this.size--;
    return firstNode.value;
  }
}

let stack = new Stack();
stack.push("FIRST");
stack.push("SECOND");
stack.push("THIRD");
stack.pop();
stack.pop();
stack.push("SECOND AGAIN");
stack.pop();
