const promiseAsyncAwait = async () => {
  console.log('promiseAsyncAwait: before awaiting');

  // Simulating an asynchronous operation using a promise
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve(true);
    }, 2000)
  );

  console.log('promiseAsyncAwait: after awaiting');
};

promiseAsyncAwait();
