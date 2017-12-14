function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  
  let pivot = array.pop();
  let left = [];
  let right = [];
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return [...quickSort(array1), pivot, ...quickSort(array2)]
}

module.exports = quickSort;