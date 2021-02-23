const bubbleSort = arr => {
  const N = arr.length;

  for (let i = 0; i < N; i++) {
    for (let j = i; j < N; j++) {
      if (arr[i] > arr[j]) {
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }

  return arr;
}

let arr = [4, 8, 15, 16, 23, 42, 54, 0, 65, 2];

console.log(bubbleSort(arr));

