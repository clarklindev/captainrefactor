export const returnNamesStartingWith = (objArr, startingLetter = 'A') => {
  return objArr.filter((each) => {
    return each.name[0] === startingLetter;
  });
};
