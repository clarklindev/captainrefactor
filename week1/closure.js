// function counterFunc(number) {
//   return ...;
// }

// var counter1 = counterFunc(5);
// console.log(counter1()); // 5
// console.log(counter1()); // 10
// console.log(counter1()); // 15

// var counter2 = counterFunc(3);
// console.log(counter2()); // 3
// console.log(counter2()); // 6
// console.log(counter2()); // 9

export const counterFunc = (num) => {
  let counter = 0;

  return function () {
    counter += num;
    return counter;
  };
};
