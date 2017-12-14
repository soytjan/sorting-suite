function genRandNums(count, maxNum) {
  let arrayOfNums = [];
  
  for (let i = 0; i < count; i++) {
    let num = Math.floor(Math.random() * maxNum);
    arrayOfNums.push(num);
  }
  
  return arrayOfNums;  
};

function genRandLetters(count) {
  let letters = 'abcdefghijklmnopqrstuvwxyz';
  let array = [];
  
  for (let i = 0; i < count; i++) {
    let letterIndex = parseInt(Math.random() * letters.length);
    
    array.push(letters[letterIndex]);
  }
  
  return array;
}

function isSorted(array) {
  let sorted = true;
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      sorted = false;
    }
  }
  
  return sorted; 
};

module.exports = {
  genRandNums,
  genRandLetters,
  isSorted
}