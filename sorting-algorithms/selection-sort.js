function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i;
    let j = i + 1;
    for (; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) {
        smallest = j;
      }
    }
    if (i !== smallest) {
      [arr[smallest], arr[i]] = [arr[i], arr[smallest]];
    }
  }
  return arr;
}

selectionSort([11, 17, 5, 28, 3, 6, 15]);
