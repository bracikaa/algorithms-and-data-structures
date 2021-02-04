function getDigitAtPlace(num, i) {
  return num.toString().split("").reverse()[i];
}

function getBiggestDigitCount(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, nums[i].toString().length);
  }

  return maxDigits;
}

function radixSort(nums) {
  let maxDigits = getBiggestDigitCount(nums);
  for (let i = 0; i < maxDigits; i++) {
    let bucketArray = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < nums.length; j++) {
        debugger;
        let digit = getDigitAtPlace(nums[j], i);
        bucketArray[digit].push(nums[j]);
    }

    nums = [].concat(...bucketArray);
  }

  console.log(nums);
}

radixSort([4, 32, 2, 4321, 968, 8, 11, 123, 66, 2211, 7, 241]);
