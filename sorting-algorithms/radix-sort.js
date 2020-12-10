function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function countDigits(num) {
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, countDigits(nums[i]));
  }

  return maxDigits;
}

function radixSort(nums) {
  let maxDigits = mostDigits(nums);
  for (let i = 0; i < maxDigits; i++) {
    let bucketArray = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < nums.length; j++) {
        debugger;
        let digit = getDigit(nums[j], i);
        bucketArray[digit].push(nums[j]);
    }

    nums = [].concat(...bucketArray);
  }

  console.log(nums);
}

radixSort([4, 32, 2, 4321, 968, 8, 11, 123, 66, 2211, 7, 241]);
