export const promiseResolveReject = () => {
  console.log('promiseResolveReject:');

  const myVal = new Promise((resolve, reject) => {
    //do something
    let a = 3;
    let b = 4;
    if (a + b > 3) {
      return resolve(a + b);
    } else {
      return reject('less than 10');
    }
  });

  myVal
    .then((val) => {
      console.log('myVal: ', val);
    })
    .catch((err) => {
      console.log('err: ', err);
    });
};
