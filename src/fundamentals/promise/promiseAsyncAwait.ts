const promiseAsyncAwait = async () => {
  // Simulating an asynchronous operation using a promise
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve(true);
    }, 2000)
  );
};

promiseAsyncAwait();
