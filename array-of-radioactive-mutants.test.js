const {
  changeLast,
  addMeToStart,
  addMeToEnd,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
} = require('./array-of-radioactive-mutants')


describe('changeLast', () => {
  it('changes the last element in the given array to the given value', () => {
    const arr1 = [1, 2, 3];
    changeLast(arr1, 5);
    expect(arr1).toEqual([1, 2, 5])
    
    const arr2 = [1, 2];
    changeLast(arr2, 5);
    expect(arr2).toEqual([1, 5]);
  })
})

describe('addMeToEnd', () => {
  it('adds "Colin" to the end of a given array', () => {
    const arr1 = ['Mesuara', 'Genghis'];
    addMeToEnd(arr1);
    expect(arr1).toEqual(['Mesuara', 'Genghis', 'Colin']);
    
    const arr2 = [2, 2, 3];
    addMeToEnd(arr2);
    expect(arr2).toEqual([2, 2, 3, 'Colin'])
  })
})

describe('addMeToStart', () => {
  it('adds "Colin" to the start of a given array', () => {
    const arr1 = ['Mesuara', 'Genghis'];
    addMeToStart(arr1);
    expect(arr1).toEqual(['Colin', 'Mesuara', 'Genghis']);
    
    const arr2 = [2, 2, 3];
    addMeToStart(arr2);
    expect(arr2).toEqual(['Colin', 2, 2, 3])
  })
})

describe('changeAllValuesTo', () => {
  it('changes every value in the given array to the given value', () => {
    const arr1 = [1, 2, 3, 5, 7, 9];
    const value1 = 15;
    changeAllValuesTo(arr1, value1);
    expect(arr1).toEqual([15, 15, 15, 15, 15, 15]);

    const arr2 = [1, 2, 3, 5, 7, 9];
    const value2 = 30;
    changeAllValuesTo(arr2, value2);
    expect(arr2).toEqual([30, 30, 30, 30, 30, 30]);
  })
})

describe('oddOrEven', () => {
  it(`changes the given array such that if the number is even, it replaces it with the string "even", and if it's odd, replaces it with "odd".`, () => {
    const arr1 = [1, 2, 3, 5, 7, 8];
    oddOrEven(arr1);
    expect(arr1).toEqual(['odd', 'even', 'odd', 'odd', 'odd', 'even'])
    
    const arr2 = [1, 2, 6, 5, 7, 8];
    oddOrEven(arr2);
    expect(arr2).toEqual(['odd', 'even', 'even', 'odd', 'odd', 'even'])
  })
})

describe('changeNextThreeToValue', () => {
  it('starting with the given index, it changes three consecutive values in the given array to the given value', () => {
    const start1 = 2;
    const arr1 = [1, 2, 3, 5, 7, 9];
    const value1 = 15;
    changeNextThreeToValue(start1, arr1, value1);
    expect(arr1).toEqual([1, 2, 15, 15, 15, 9]);

    const start2 = 1;
    const arr2 = [1, 2, 3, 5, 7, 9];
    const value2 = 15;
    changeNextThreeToValue(start2, arr2, value2);
    expect(arr2).toEqual([1, 15, 15, 15, 7, 9]);
  })
})