import { it, describe, expect } from 'vitest';

describe('arraySlice', () => {
  it('should yield a slice of an array', () => {
    const arr = [1, 2, 3, 2, 1, 5, 6];

    const slice1 = (arr) => {
      return arr.slice(0, 2);
    };
    const slice1ExpectedAnswer = [1, 2];

    const slice2 = (arr) => {
      return arr.slice(4, 6);
    };
    const slice2ExpectedAnswer = [1, 5];

    const slice3 = (arr) => {
      const firstPart = arr.slice(1, 2);
      const secondPart = arr.slice(-1);
      return [...firstPart, ...secondPart];
    };
    const slice3ExpectedAnswer = [2, 6];

    expect(slice1(arr)).toEqual(slice1ExpectedAnswer);
    expect(slice2(arr)).toEqual(slice2ExpectedAnswer);
    expect(slice3(arr)).toEqual(slice3ExpectedAnswer);
  });
});
