// function max(numbers) {
//   // TODO: Fill-in the base condition

//   let [head, ...tail] = numbers;
//   // TODO: Fill-in condition here
// }

// // Testing the function
// console.log(max([])); // undefined
// console.log(max([0])); // 0
// console.log(max([1, 2])); // 2
// console.log(max([2, 3, 1])); // 3

export const max = (numbers) => {
  if (!numbers.length) {
    return undefined;
  }
  if (numbers.length === 1) {
    return numbers[0];
  }

  //given
  let [head, ...tail] = numbers;

  const maxTail = max(tail);

  return head > maxTail ? head : maxTail;
};
