import { it, expect, describe } from 'vitest';

import { countOccurrence } from './countOccurence';

describe('countOccurance', () => {
  it('should count the occurance of each value in array', () => {
    const result = countOccurrence([2, 3, 1, 2, 8, 3, 2]);
    const expectedResult = { 2: 3, 3: 2, 1: 1, 8: 1 };
    expect(result).toEqual(expectedResult);
  });
});
