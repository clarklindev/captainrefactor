import { it, expect, describe, beforeEach } from 'vitest';

import { destructObject } from './destructObject';

describe('destructObject', () => {
  it('should return keys and values of an object', () => {
    const obj = {
      name: 'John',
      age: 30,
      city: 'New York',
    };

    const result = destructObject(obj);

    expect(result).toEqual({
      keys: ['name', 'age', 'city'],
      values: ['John', 30, 'New York'],
    });
  });
});
