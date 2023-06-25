export const countOccurance = (arr) => {
  return arr.reduce((accumulator, value, index, array) => {
    if (accumulator[value] === undefined) {
      accumulator[value] = 1;
    } else {
      accumulator[value] += 1;
    }
    return accumulator;
  }, {});
};
