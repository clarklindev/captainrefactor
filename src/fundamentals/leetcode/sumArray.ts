export const sum = (numbers: Array<number>): any => {
  // TODO: Fill-in the base condition
  if (numbers.length === 1) {
    return numbers[0];
  }

  let [head, ...tail] = numbers;
  return head + sum(tail);
};
