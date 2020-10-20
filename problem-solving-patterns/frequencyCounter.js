// Write a function called sameFrequency, which accepts two arrays.
// The function should return true if every value in the array has it's corresponding value squared in the second array.
// The frequency of values must be the same.
//sameFrequency([1, 2, 3], [4, 1, 9]); // true
//sameFrequency([1, 2, 3], [1, 9]); // false
//sameFrequency([1, 2, 1], [4, 4, 1]); // false (must be same frequency)

//Updated solution O(n)
function sameFrequency(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const freqCount1 = {};
  const freqCount2 = {};
  for (let val of arr1) {
    freqCount1[val] = (freqCount1[val] || 0) + 1;
  }

  for (let val of arr2) {
    freqCount2[val] = (freqCount2[val] || 0) + 1;
  }

  for (let key in freqCount1) {
    if (!(key ** 2 in freqCount2)) return false;
    if (freqCount1[key] !== freqCount2[key ** 2]) return false;
  }

  return true;
}

sameFrequency([1, 2, 3], [4, 1, 9]);
sameFrequency([1, 2, 3], [1, 9]);
sameFrequency([1, 2, 1], [4, 4, 1]);
