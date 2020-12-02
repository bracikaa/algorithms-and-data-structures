function quickSort(arr, left = 0, right = arr.length - 1) {
  if(left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  
  return arr;
}

function pivot(arr, start = 0, end = arr.length + 1) {
  let pivot = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, i, swapIndex);
    }
  }

  swap(arr, start, swapIndex);
  return swapIndex;

  function swap(arr, firstIndex, secondIndex) {
    [arr[firstIndex], arr[secondIndex]] = [arr[secondIndex], arr[firstIndex]];
  }
}

quickSort([2, 8, 10, 4, 1, 5, 9, 7, 6, 3]);
