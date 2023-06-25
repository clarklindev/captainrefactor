import { it, expect, describe } from 'vitest';

import Person from './Person';

describe('Person', () => {
  it('should create an instance of Person', () => {
    const age = 30;
    const name = 'Ben';

    const person = new Person(name, age);
    const expectedAge = age;
    const expectedName = name;
    expect(person.getAge()).toEqual(expectedAge);
    expect(person.getName()).toEqual(expectedName);
  });
});
