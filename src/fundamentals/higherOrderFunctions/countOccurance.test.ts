import { it, expect, describe, beforeEach } from 'vitest';

import { countOccurance } from './countOccurance';

describe('countOccurance', () => {
  it('should count the occurance of each value in array', () => {
    const result = countOccurance([2, 3, 1, 2, 8, 3, 2]);
    const expectedResult = { 2: 3, 3: 2, 1: 1, 8: 1 };
    expect(result).toEqual(expectedResult);
  });
});