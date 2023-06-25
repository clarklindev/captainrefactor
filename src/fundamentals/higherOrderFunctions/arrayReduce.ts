export const arrayReduce = (arr: Array<number>) => {
  const sum = arr.reduce((accumulator, val, index, arr) => {
    return accumulator + val;
  }, 0);
  return sum;
};

export const addEvenNumbers = (arr: Array<number>) => {
  const result = arr.reduce((accumulator, value, index, arr) => {
    const addValue = value % 2 === 0 ? value : 0;
    return accumulator + addValue;
  }, 0);
  return result;
};

export const multiplyNumbers = (arr: Array<number>) => {
  const result = arr.reduce((accumulator, current, index, arr) => {
    return accumulator * current;
  });
  return result;
};

export const reduceFilter = (arr: Array<number>, func: Function) => {
  return arr.reduce((accumulator, value: number, index) => {
    if (func(value)) {
      accumulator.push(arr[index]);
    }
    return accumulator;
  }, new Array<number>());
};

export const reduceMax = (arr: Array<number>) => {
  return arr.reduce((accumulator, value) => {
    if (accumulator < value) {
      return value;
    }
    return accumulator;
  }, 0);
};
