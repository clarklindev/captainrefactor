import { it, expect, describe, beforeEach } from 'vitest';

import { returnNamesStartingWith } from './returnNamesStartingWith';

describe('returnNamesStartingWith', () => {
  it('should return all names starting with Character A', () => {
    const result = returnNamesStartingWith([{ name: 'Ted' }, { name: 'Ben' }, { name: 'Adam' }], 'A');
    const expectedResult = [{ name: 'Adam' }];
    expect(result).toEqual(expectedResult);
  });

  it('should return all names starting with Character A (default) if starting character not defined', () => {
    const result = returnNamesStartingWith([{ name: 'Ted' }, { name: 'Ben' }, { name: 'Adam' }]);
    const expectedResult = [{ name: 'Adam' }];
    expect(result).toEqual(expectedResult);
  });

  it('should return empty array if nothing found', () => {
    const result = returnNamesStartingWith([{ name: 'Ted' }, { name: 'Ben' }, { name: 'Tess' }]);
    const expectedResult = [];

    expect(result).toEqual(expectedResult);
  });
});
