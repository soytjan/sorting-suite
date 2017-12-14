function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let middle = array.length / 2;
  let left = array.splice(0, middle);
  let right = array;
  
  return merge(mergeSort(left), mergeSort(right));
}

function merge(array1, array2) {
  let newArray = [];
  
  while(array1.length > 0 && array2.length > 0) {
    if (array1[0] <= array2[0]) {
      let smallNum = array1.shift();
      newArray.push(smallNum);
    } else if (array2[0] <= array1[0]) {
      let smallNum = array2.shift();
      newArray.push(smallNum);
    }
  }
  
  if (array1.length > 0) {
    newArray = [...newArray, ...array1];
  }
  
  if (array2.length > 0) {
    newArray = [...newArray, ...array2];
  }
  return newArray;
}

module.exports = mergeSort;