function retryPromise(promiseFunction, maxRetry) {
  return promiseFunction().catch((error) => {
    if (maxRetry > 0) {
      console.log("Retrying...");
      return retryPromise(promiseFunction, maxRetry - 1);
    } else {
      throw error; // no retries left
    }
  });
}

const maxRetries = 3;

function myPromiseFunction() {
  return new Promise((resolve, reject) => {
    // simulating an async operation
    setTimeout(() => {
      if (Math.random() > 0.7) {
        resolve("Opartion succeed 🎊");
      } else {
        reject("Operation failed !");
      }
    }, 1500);
  });
}

retryPromise(myPromiseFunction, maxRetries)
  .then((res) => {
    console.log("res --> ", res);
  })
  .catch((err) => {
    console.log("Failed after multiple retries:  --> ", err);
  });
