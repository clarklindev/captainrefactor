import { describe, expect, it } from 'vitest';

import { sum } from './sumArray';

describe('sumArray', () => {
  it('should return the sum of the array', () => {
    const arr = [2, 3, 4];
    const result = sum(arr);
    const expectedResult = arr.reduce((accumulator, value) => {
      return accumulator + value;
    });

    expect(result).toEqual(expectedResult);
  });
});
