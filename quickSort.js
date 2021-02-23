const quickSort = arr => {
  const pivotPlace = (a, first, last) => {
    let pivot = a[first];
    let left = first + 1;
    let right = last;
    let flag = false;

    while (left <= right) {
      if (flag) { 
        let tmp = a[left];
        a[left] = a[right];
        a[right] = tmp;
      }

      flag = true;
      
      while ((left <= right) && (a[left] <= pivot)) left++;
      while ((left <= right) && (a[right] >= pivot)) right--;
    }

    let tmp = a[first];
    a[first] = a[right];
    a[right] = tmp;

    return right;
  };

  const sort = (a, first, last) => {
    if (first < last) {
      let pivotIndex = pivotPlace(a, first, last);
      sort(a, first, pivotIndex - 1);
      sort(a, pivotIndex + 1, last);
    }
  };

  const N = arr.length;
  sort(arr, 0, N - 1);

  return arr;
}
  
let arr = [4, 8, 15, 16, 23, 42, 54, 0, 65, 2];
  
console.log(quickSort(arr));