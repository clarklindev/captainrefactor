export const returnUniqueNumbers = (arr1: Array<number>, arr2: Array<number>) => {
  const combinedArr = [...arr1, ...arr2];
  const uniqueSet = [...new Set(combinedArr)];
  return uniqueSet;
};
