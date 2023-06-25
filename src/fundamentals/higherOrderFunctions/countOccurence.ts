export const countOccurrence = (arr: number[]) => {
  return arr.reduce((accumulator: Record<number, number>, value: number) => {
    if (accumulator[value] === undefined) {
      accumulator[value] = 1;
    } else {
      accumulator[value] += 1;
    }
    return accumulator;
  }, {});
};
