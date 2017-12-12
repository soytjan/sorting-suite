const { expect } = require('chai');

const bubbleSort = require('../lib/bubbleSort.js');

describe('bubbleSort', function() {
  function genRandNums(quantity) {
      let arrayOfNums = [];
      for (let i = 0; i < quantity; i++) {
        let num = Math.floor(Math.random() * 100);
        arrayOfNums.push(num);
      }
      return arrayOfNums;  
    };

  function isSorted(array) {
    let sorted = true;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        sorted = false;
      }
    }
    return sorted; 
  }

  beforeEach(() => {
    
  });

  it('expects to be a function', function() {
    expect(bubbleSort).to.be.a('function');
  });

  it('expect to return an already sorted array', function() {
    let array = [3];

    bubbleSort(array);

    expect(array).to.deep.equal([3]);
  });

  it('expect to sort an array of 5 numbers', function() {
    let arrayOfFive = genRandNums(5);

    expect(arrayOfFive.length).to.equal(5);
    expect(isSorted(arrayOfFive)).to.equal(false);

    bubbleSort(arrayOfFive);

    expect(isSorted(arrayOfFive)).to.equal(true);
  });

  it('expect to sort an array with multiple of the same number', function() {
    let array = [10, 10, 9, 6, 7, 9, 8, 1, 2, 3];

    expect(isSorted(array)).to.equal(false);

    bubbleSort(array);

    expect(isSorted(array)).to.equal(true);
  });

  it('expect to sort an array of 20 numbers', function() {
    let array = genRandNums(20);

    expect(array.length).to.equal(20);
    expect(isSorted(array)).to.equal(false);

    bubbleSort(array);

    expect(isSorted(array)).to.equal(true);
  });

  it('expect to sort an array of 100', function() {
    let array = genRandNums(100);

    expect(array.length).to.equal(100);
    expect(isSorted(array)).to.equal(false);

    bubbleSort(array);

    expect(isSorted(array)).to.equal(true);
  });

  it('expect to sort an array of 1000', function() {
    let array = genRandNums(1000);

    expect(array.length).to.equal(1000);
    expect(isSorted(array)).to.equal(false);

    bubbleSort(array);

    expect(isSorted(array)).to.equal(true);
  });

  it('expect to sort an array of 10000', function() {
    let array = genRandNums(10000);

    expect(array.length).to.equal(10000);
    expect(isSorted(array)).to.equal(false);

    bubbleSort(array);

    expect(isSorted(array)).to.equal(true);
  });

  it('expect to sort an array of 12000', function() {
    let array = genRandNums(12000);

    expect(array.length).to.equal(12000);
    expect(isSorted(array)).to.equal(false);

    bubbleSort(array);

    expect(isSorted(array)).to.equal(true);
  })
})