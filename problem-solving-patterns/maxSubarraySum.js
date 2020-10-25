// Write a function called maxSubarraySum which accepts an array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array.

// O(n)
function maxSubarraySum(arr, n) {
  if (arr.length < n) {
    return null;
  }

  let maxSum = 0;
  let temp = 0;

  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  
  temp = maxSum;
  for (let i = n; i < arr.length; i++) {
    temp = temp - arr[i - n] + arr[i];
    maxSum = Math.max(temp, maxSum);
  }

  console.log(maxSum);
}

maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17
maxSubarraySum([4, 2, 1, 6], 1); // 6
maxSubarraySum([], 4); // null
