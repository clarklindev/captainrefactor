export const sum = (numbers: Array<number>): number => {
  // TODO: Fill-in the base condition
  if (numbers.length === 1) {
    return numbers[0];
  }

  const [head, ...tail] = numbers;
  return head + sum(tail);
};
