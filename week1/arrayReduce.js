export const arrayReduce = (arr) => {
  const sum = arr.reduce((accumulator, val, index, arr) => {
    return accumulator + val;
  }, 0);
  return sum;
};

export const addEvenNumbers = (arr) => {
  const result = arr.reduce((accumulator, value, index, arr) => {
    const addValue = value % 2 === 0 ? value : 0;
    return accumulator + addValue;
  }, 0);
  return result;
};

export const multiplyNumbers = (arr) => {
  const result = arr.reduce((accumulator, current, index, arr) => {
    return accumulator * current;
  });
  return result;
};
