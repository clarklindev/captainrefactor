//Write a function that takes an object and returns an array of its keys and an array of its values.
export type Person = {
  name: string;
  age: number;
  city: string;
};

export const destructObject = (obj: Person) => {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  return { keys, values };
};
