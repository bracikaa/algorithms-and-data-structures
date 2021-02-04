class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(value) {
    if(!this.root) return undefined;
    let current = this.root;
    let found = false;

    while(current && !found) {
      if(value > current.value) {
        current = current.right;
      } else if(value < current.value) {
        current = current.left;
      } else if(value === current.value) {
        found = true;
      }
    }

    return current;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(2);
tree.insert(15);
tree.insert(8);
tree.insert(9);
tree.insert(12);
tree.insert(22);
console.log(tree.find(1));
console.log(tree.find(22));
