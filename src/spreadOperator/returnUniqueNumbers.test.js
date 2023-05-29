import { it, expect, describe, beforeEach } from 'vitest';

import { returnUniqueNumbers } from './returnUniqueNumbers';

describe('returnUniqueNumbers', () => {
  it('should result only the unique numbers of 2 number arrays', () => {
    const result = returnUniqueNumbers([1, 2, 3], [1, 2, 3]);
    const expectedResult = [1, 2, 3];
    expect(result).toEqual(expectedResult);
  });
});
