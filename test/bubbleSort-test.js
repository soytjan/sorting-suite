const { expect } = require('chai');
const { genRandNums, genRandLetters, isSorted } = require('../lib/utilities.js');
const bubbleSort = require('../lib/bubbleSort.js');

describe('bubbleSort', function() {

  it('expects to be a function', function() {
    expect(bubbleSort).to.be.a('function');
  });

  it('expects to return an already sorted array', function() {
    let array = [3];

    bubbleSort(array);

    expect(array).to.deep.equal([3]);
  });

  it('expects to sort an array of 5 numbers', function() {
    let arrayOfFive = genRandNums(5, 10);

    expect(arrayOfFive.length).to.equal(5);
    expect(isSorted(arrayOfFive)).to.equal(false);

    bubbleSort(arrayOfFive);

    expect(isSorted(arrayOfFive)).to.equal(true);
  });

  it('expects to sort an array with multiple of the same number', function() {
    let array = [10, 10, 9, 6, 7, 9, 8, 1, 2, 3];

    expect(isSorted(array)).to.equal(false);

    bubbleSort(array);

    expect(isSorted(array)).to.equal(true);
  });

  it('expects to sort an array of negative numbers', function() {
    let array = [-10, -9, -3, -1, 0, -2, -5, -6];

    bubbleSort(array);

    expect(isSorted(array)).to.equal(true);
  });

  it('expects to sort an array of negative and positive numbers', function() {
    let array = [2, 6, 7, -10, -9, -3, -1, 0];

    bubbleSort(array);

    expect(isSorted(array)).to.equal(true);
  });

  it('expects to sort an array of letters', function() {
    let array = genRandLetters(10);

    bubbleSort(array);

    expect(isSorted(array)).to.equal(true);
  });

  it('expects to sort an array of 20 numbers', function() {
    let array = genRandNums(20, 25);

    expect(array.length).to.equal(20);
    // expect(isSorted(array)).to.equal(false);

    bubbleSort(array);

    expect(isSorted(array)).to.equal(true);
  });

  it('expects to sort an array of 100', function() {
    let array = genRandNums(100, 110);

    expect(array.length).to.equal(100);
    expect(isSorted(array)).to.equal(false);

    bubbleSort(array);

    expect(isSorted(array)).to.equal(true);
  });

  it('expects to sort an array of 1000', function() {
    let array = genRandNums(1000, 1100);

    expect(array.length).to.equal(1000);
    expect(isSorted(array)).to.equal(false);

    bubbleSort(array);

    expect(isSorted(array)).to.equal(true);
  });

  it('expects to sort an array of 10000', function() {
    let array = genRandNums(10000, 11000);

    expect(array.length).to.equal(10000);
    expect(isSorted(array)).to.equal(false);

    bubbleSort(array);

    expect(isSorted(array)).to.equal(true);
  });

  it('expects to sort an array of 10500', function() {
    let array = genRandNums(10500, 13200);

    expect(array.length).to.equal(10500);

    bubbleSort(array);

    expect(isSorted(array)).to.equal(true);
  })
})