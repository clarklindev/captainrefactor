import { describe, expect, it } from 'vitest';
import { max } from './findMax';

describe('max', () => {
  it('should find the max value from an array', () => {
    const result = max([1, 5, 3, 2]);
    const expectedResult = 5;
    expect(result).toEqual(expectedResult);
  });
});
