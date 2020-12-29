function bubbleSort(arr) {
  let swapHappened;
  for (let i = arr.length; i > 0; i--) {
    swapHappened = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapHappened = false;
      }
    }
    if (swapHappened) {
      break;
    }
  }

  return arr;
}

bubbleSort([15, 6, 4, 18, 7, 13, 1]);
bubbleSort([2, 4, 6, 5, 7, 9, 12]);
