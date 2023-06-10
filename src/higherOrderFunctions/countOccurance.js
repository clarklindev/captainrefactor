export const countOccurance = (arr) => {
  return arr.reduce((accumulator, value, index, array) => {
    accumulator[value] = (accumulator[value] ?? 0) + 1;
    return accumulator;
  }, {});
};

var someIntegerSetting = 0;
