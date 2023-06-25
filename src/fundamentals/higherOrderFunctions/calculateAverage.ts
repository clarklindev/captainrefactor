export const calculateAverage = (arr: Array<number>) => {
  const result = arr.reduce((accumulator, current) => {
    return accumulator + current;
  }, 0);

  return result / arr.length;
};
