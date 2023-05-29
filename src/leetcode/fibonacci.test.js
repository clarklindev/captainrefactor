import { describe, expect, it } from 'vitest';
import { fibonacci } from './fibonacci';

describe('fibonacci', () => {
  it('should calculate the fibonacci number by summing up the two preceding Fibonacci numbers in the sequence, starting with 0 and 1.', () => {
    const result = fibonacci(4);
    const expectedResult = fibonacci(3) + fibonacci(2);
    expect(result).toEqual(expectedResult);
  });
});
