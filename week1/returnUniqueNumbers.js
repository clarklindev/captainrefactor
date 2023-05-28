export const returnUniqueNumbers = (arr1, arr2) => {
  const combinedArr = [...arr1, ...arr2];
  const uniqueSet = [...new Set(combinedArr)];
  return uniqueSet;
};
