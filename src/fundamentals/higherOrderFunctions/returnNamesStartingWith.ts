type nameObject = {
  name: string;
};

export const returnNamesStartingWith = (objArr: Array<nameObject>, startingLetter = 'A') => {
  return objArr.filter((each: nameObject) => {
    return each.name[0] === startingLetter;
  });
};
