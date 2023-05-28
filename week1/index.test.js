import { it, expect, describe, beforeEach } from 'vitest';
import { addEvenNumbers, arrayReduce, multiplyNumbers } from './arrayReduce';
import { calculateAverage } from './calculateAverage';
import { capitalizeEachWord } from './capitalizeEachWord';
import { destructObject } from './destructObject';
import Person from './Person';
import { counterFunc } from './closure';
import { returnNamesStartingWith } from './returnNamesStartingWith';
import { returnUniqueNumbers } from './returnUniqueNumbers';

describe('arrayReduce', () => {
  describe('arrayReduce', () => {
    it('should return the sum of the array', () => {
      const result = arrayReduce([1, 2, 3]);
      expect(result).toBe(6);
    });
  });

  describe('addEvenNumbers', () => {
    it('should add even numbers in the array', () => {
      const result = addEvenNumbers([1, 2, 3, 4]);
      expect(result).toBe(6);
    });
  });

  describe('multiplyNumbers', () => {
    it('should multiply the numbers in a given array', () => {
      const result = multiplyNumbers([1, 2, 3, 4]);
      expect(result).toBe(24);
    });
  });
});

describe('calculateAverage', () => {
  it('should calculate the average of the numbers in an array', () => {
    const result = calculateAverage([2, 6, 9]);
    const expectedAnswer = (2 + 6 + 9) / 3;
    expect(result).toBe(expectedAnswer);
  });
});

describe('capitalizeEachWord', () => {
  it('should capitalize the first letter of each word in a string', () => {
    const result = capitalizeEachWord('hello good day');
    const expectedResult = 'Hello Good Day';
    expect(result).toEqual(expectedResult);
  });
});

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

describe('returnNamesStartingWith', () => {
  it('should return all names starting with Character A', () => {
    const result = returnNamesStartingWith(
      [{ name: 'Ted' }, { name: 'Ben' }, { name: 'Adam' }],
      'A'
    );
    const expectedResult = [{ name: 'Adam' }];
    expect(result).toEqual(expectedResult);
  });

  it('should return all names starting with Character A (default) if starting character not defined', () => {
    const result = returnNamesStartingWith([
      { name: 'Ted' },
      { name: 'Ben' },
      { name: 'Adam' },
    ]);
    const expectedResult = [{ name: 'Adam' }];
    expect(result).toEqual(expectedResult);
  });

  it('should return empty array if nothing found', () => {
    const result = returnNamesStartingWith([
      { name: 'Ted' },
      { name: 'Ben' },
      { name: 'Tess' },
    ]);
    const expectedResult = [];

    expect(result).toEqual(expectedResult);
  });
});

describe('returnUniqueNumbers', () => {
  it('should result only the unique numbers of 2 number arrays', () => {
    const result = returnUniqueNumbers([1, 2, 3], [1, 2, 3]);
    const expectedResult = [1, 2, 3];
    expect(result).toEqual(expectedResult);
  });
});

describe('closure example', () => {
  it('should behave like a closure', () => {
    const counter1 = counterFunc(5);

    const call1 = counter1();
    const call2 = counter1();

    expect(call1).toBe(5);
    expect(call2).toBe(10);
  });
});
