const chai = require('chai').use(require("chai-sorted"));
const expect = chai.expect;
const { genRandNums, genRandLetters, isSorted } = require('../lib/utilities.js');
const quickSort = require('../lib/insertionSort.js');

describe('quickSort', function() {
  it('expects to be a function', function() {
    expect(quickSort).to.be.a('function');
  });

  it('expects to return an already sorted array', function() {
    let array = [3];

    let newArray = quickSort(array);

    expect(newArray).to.deep.equal([3]);
  });

  it('expects to sort an array of 5 numbers', function() {
    let array = genRandNums(5, 10);

    expect(array.length).to.equal(5);

    let newArray = quickSort(array);

    expect(isSorted(newArray)).to.equal(true);
  });

  it('expects to sort an array with multiple of the same number', function() {
    let array = [10, 10, 9, 6, 7, 9, 8, 1, 2, 3];

    let newArray = quickSort(array);

    expect(isSorted(newArray)).to.equal(true);
  });

  it('expects to sort an array of negative numbers', function() {
    let array = [-10, -9, -3, -1, 0, -2, -5, -6];

    let newArray = quickSort(array);

    expect(isSorted(newArray)).to.equal(true);
  });

  it('expects to sort an array of negative and positive numbers', function() {
    let array = [2, 6, 7, -10, -9, -3, -1, 0];

    let newArray = quickSort(array);

    expect(isSorted(newArray)).to.equal(true);
  });

  it('expects to sort an array of letters', function() {
    let array = genRandLetters(10);

    let newArray = quickSort(array);

    expect(isSorted(newArray)).to.equal(true);
  });

  it('expects to sort an array of 20 numbers', function() {
    let array = genRandNums(20, 100);

    expect(array.length).to.equal(20);

    let newArray = quickSort(array);

    expect(isSorted(newArray)).to.equal(true);
  });

  it('expects to sort an array of 100', function() {
    let array = genRandNums(100, 100);

    expect(array.length).to.equal(100);
    
    let newArray = quickSort(array);

    expect(isSorted(newArray)).to.equal(true);
  });

  it('expects to sort an array of 1000', function() {
    let array = genRandNums(1000, 100);

    expect(array.length).to.equal(1000);
    
    let newArray = quickSort(array);

    expect(isSorted(newArray)).to.equal(true);
  });

  it('expects to sort an array of 10000', function() {
    let array = genRandNums(10000, 100);

    expect(array.length).to.equal(10000);
    
    let newArray = quickSort(array);

    expect(isSorted(newArray)).to.equal(true);
  });

  it('expects to sort an array of 12000', function() {
    let array = genRandNums(12000, 100);

    expect(array.length).to.equal(12000);
    
    let newArray = quickSort(array);

    expect(isSorted(newArray)).to.equal(true);
  });

  it('expects to sort an array of 15000', function() {
    let array = genRandNums(15000, 100);

    expect(array.length).to.equal(15000);
    
    let newArray = quickSort(array);

    expect(isSorted(newArray)).to.equal(true);
  });

  it('expects to sort an array of 15500', function() {
    let array = genRandNums(15500, 20000);

    expect(array.length).to.equal(15500);
    
    let newArray = quickSort(array);

    expect(isSorted(newArray)).to.equal(true);
  });

})