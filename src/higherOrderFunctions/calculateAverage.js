export const calculateAverage = (arr) => {
  const result = arr.reduce((accumulator, current) => {
    return accumulator + current;
  }, 0);

  return result / arr.length;
};
