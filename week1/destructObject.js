//Write a function that takes an object and returns an array of its keys and an array of its values.

export const destructObject = (obj) => {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  return { keys, values };
};
