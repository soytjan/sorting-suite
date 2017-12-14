const chai = require('chai');
const expect = chai.expect;
const { genRandNums, genRandLetters, isSorted } = require('../lib/utilities.js');
const mergeSort = require('../lib/insertionSort.js');

describe('mergeSort', function() {
  it('expects to be a function', function() {
    expect(mergeSort).to.be.a('function');
  });

  it('expects to return an already sorted array', function() {
    let array = [3];

    expect(mergeSort(array)).to.deep.equal([3]);
  });

  it('expects to sort an array of 5 numbers', function() {
    let array = genRandNums(5, 10);

    expect(array.length).to.equal(5);
    expect(isSorted(array)).to.equal(false);

    let newArray = mergeSort(array);

    expect(isSorted(newArray)).to.equal(true);
  });

  it('expects to sort an array with multiple of the same number', function() {
    let array = [10, 10, 9, 6, 7, 9, 8, 1, 2, 3];

    expect(isSorted(array)).to.equal(false);

    let newArray = mergeSort(array);

    expect(isSorted(newArray)).to.equal(true);
  });

  it('expects to sort an array of negative numbers', function() {
    let array = [-10, -9, -3, -1, 0, -2, -5, -6];

    let newArray = mergeSort(array);

    expect(isSorted(newArray)).to.equal(true);
  });

  it('expects to sort an array of negative and positive numbers', function() {
    let array = [2, 6, 7, -10, -9, -3, -1, 0];

    let newArray = mergeSort(array);

    expect(isSorted(newArray)).to.equal(true);
  });

  it('expects to sort an array of letters', function() {
    let array = genRandLetters(10);

    let newArray = mergeSort(array);

    expect(isSorted(newArray)).to.equal(true);
  });

  it('expects to sort an array of 20 numbers', function() {
    let array = genRandNums(20, 30);

    expect(array.length).to.equal(20);

    let newArray = mergeSort(array);

    expect(isSorted(newArray)).to.equal(true);
  });

  it('expects to sort an array of 100', function() {
    let array = genRandNums(100, 110);

    expect(array.length).to.equal(100);
    
    let newArray = mergeSort(array);

    expect(isSorted(newArray)).to.equal(true);
  });

  it('expects to sort an array of 1000', function() {
    let array = genRandNums(1000, 1100);

    expect(array.length).to.equal(1000);
    
    let newArray = mergeSort(array);

    expect(isSorted(newArray)).to.equal(true);
  });

  it('expects to sort an array of 10000', function() {
    let array = genRandNums(10000, 10100);

    expect(array.length).to.equal(10000);
    
    let newArray = mergeSort(array);

    expect(isSorted(newArray)).to.equal(true);
  });

  it('expects to sort an array of 12000', function() {
    let array = genRandNums(12000, 12100);

    expect(array.length).to.equal(12000);
    
    let newArray = mergeSort(array);

    expect(isSorted(newArray)).to.equal(true);
  });

  it('expects to sort an array of 15000', function() {
    let array = genRandNums(15000, 15100);

    expect(array.length).to.equal(15000);
    
    let newArray = mergeSort(array);

    expect(isSorted(newArray)).to.equal(true);
  });

  it('expects to sort an array of 15500', function() {
    let array = genRandNums(15500, 16000);

    expect(array.length).to.equal(15500);
    
    let newArray = mergeSort(array);

    expect(isSorted(newArray)).to.equal(true);
  });

})