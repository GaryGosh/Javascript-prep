/* 
    The Promise.all() method returns a single Promise that resolves when all of the promises passed as an iterable
    have resolved or when the iterable contains no promises. It rejects with the reason of the first promise that rejects.
 */

/* 
    Thought process
    1. For the sake of simplicity we will create a method task which will create a promise and resolve it in some time x.
    2. Since the order of the results array is important, we will chain each promise resolution to the next one
    3. A simple forEach iterator can be used, and we need to keep track of the index of the parent array
    4. When the number of promises resolved is equal to the length of the task array we will resolve the overall results array.
*/

function task(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // testing for reject
      // if (time === 1500) {
      //   reject(time);
      // }
      resolve(time);
    }, time);
  });
}

const taskList = [task(1000), task(1500), task(2000)];

function myPromiseAll(promises) {
  let res = [];
  let completed = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise, idx) => {
      promise
        .then((val) => {
          res[idx] = val;
          completed++;
          if (completed === promises.length) {
            resolve(res);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

// test 1
myPromiseAll(taskList)
  .then((res) => console.log("resolved -> ", res))
  .catch((err) => console.log("rejected --> ", err));
