import { it, expect, describe } from 'vitest';

import { capitalizeEachWord } from './capitalizeEachWord';

describe('capitalizeEachWord', () => {
  it('should capitalize the first letter of each word in a string', () => {
    const result = capitalizeEachWord('hello good day');
    const expectedResult = 'Hello Good Day';
    expect(result).toEqual(expectedResult);
  });
});
