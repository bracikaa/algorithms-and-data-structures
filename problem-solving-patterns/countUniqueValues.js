//Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
//There can be negative numbers in the array, but it will always be sorted.

//countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
//countUniqueValues([-2, -1, -1, 0, 1]); // 4
//countUniqueValues([]); // 0

// O(n)
const countUniqueValues = (array) => {
  if (array.length === 0) {
    return 0;
  }

  let i = 0;
  for (let j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      array[++i] = array[j];
    }
  }

  return i + 1;
};

countUniqueValues([1, 3, 3, 4, 4, 5, 5, 6, 6, 6, 7, 8, 9, 9, 10]);
countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([-2, -1, -1, 0, 1]); // 4
countUniqueValues([]); // 0
