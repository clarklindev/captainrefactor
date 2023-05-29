import { it, expect, describe, beforeEach } from 'vitest';

import { calculateAverage } from './calculateAverage';

describe('calculateAverage', () => {
  it('should calculate the average of the numbers in an array', () => {
    const result = calculateAverage([2, 6, 9]);
    const expectedAnswer = (2 + 6 + 9) / 3;
    expect(result).toBe(expectedAnswer);
  });
});
