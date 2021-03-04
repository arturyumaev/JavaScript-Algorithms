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
