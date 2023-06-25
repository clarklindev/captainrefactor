import { it, expect, describe } from 'vitest';

import { addEvenNumbers, arrayReduce, multiplyNumbers, reduceFilter, reduceMax } from './arrayReduce';

describe('arrayReduce', () => {
  describe('arrayReduce', () => {
    it('should return the sum of the array', () => {
      const result = arrayReduce([1, 2, 3]);
      expect(result).toBe(6);
    });
  });

  describe('addEvenNumbers', () => {
    it('should add even numbers in the array', () => {
      const result = addEvenNumbers([1, 2, 3, 4]);
      expect(result).toBe(6);
    });
  });

  describe('multiplyNumbers', () => {
    it('should multiply the numbers in a given array', () => {
      const result = multiplyNumbers([1, 2, 3, 4]);
      expect(result).toBe(24);
    });
  });

  describe('reduceFilter', () => {
    it('should return valid values using filter function', () => {
      const result = reduceFilter([1, 2, 3, 0, 8, 2], (x: number) => x > 2);
      const expectedResult = [3, 8];
      expect(result).toEqual(expectedResult);
    });
  });

  describe('reduceMax', () => {
    it('should return the highest value in array', () => {
      const result = reduceMax([1, 19, 3, 0, 8, 2, 18]);
      const expectedResult = 19;
      expect(result).toEqual(expectedResult);
    });
  });
});
