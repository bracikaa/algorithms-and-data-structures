// Implement a function called, areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.

//areThereDuplicates(1, 2, 3); // false
//areThereDuplicates(1, 2, 2); // true
//areThereDuplicates('a', 'b', 'c', 'a'); // true

const areThereDuplicates = (...args) => {
  let lookup = {};

  for (let element of args) {
    if (lookup[element]) {
      return true;
    }

    lookup[element] = (lookup[element] || 0) + 1;
  }
  return false;
};

areThereDuplicates(1, 2, 3); // false
areThereDuplicates(1, 2, 2); // true
areThereDuplicates("a", "b", "c", "a"); // true
