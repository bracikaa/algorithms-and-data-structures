// Write a function called sameFrequency, which accepts two arrays.
// The function should return true if every value in the array has it's corresponding value squared in the second array.
// The frequency of values must be the same.
//sameFrequency([1, 2, 3], [4, 1, 9]); // true
//sameFrequency([1, 2, 3], [1, 9]); // false
//sameFrequency([1, 2, 1], [4, 4, 1]); // false (must be same frequency)

//First solution O(n^2)
function sameFrequency(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
  
    for (let i = 0; i < arr1.length; i++) {
      let currIndex = arr2.indexOf(arr1[i] ** 2);
      if (currIndex === -1) {
        return false;
      }
  
      arr2.splice(currIndex, 1);
    }
  
    return true;
  }
  
  sameFrequency([1, 2, 3], [4, 1, 9]);
  sameFrequency([1, 2, 3], [1, 9]);
  sameFrequency([1, 2, 1], [4, 4, 1]);
  