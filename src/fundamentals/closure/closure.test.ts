import { it, expect, describe } from 'vitest';

import { counterFunc } from './closure';

describe('closure example', () => {
  it('should behave like a closure', () => {
    const counter1 = counterFunc(5);

    const call1 = counter1();
    const call2 = counter1();

    expect(call1).toBe(5);
    expect(call2).toBe(10);
  });
});
