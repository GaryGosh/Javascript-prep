/* Throttling is a technique that limits how often a function can be called in a given period of time. 
   It is useful for improving the performance and responsiveness of web pages that have event listeners 
   that trigger heavy or expensive operations, such as animations, scrolling, resizing, fetching data, etc. */

function throttle(funcToExecute, dealy) {
  let timer = null; // variable to keep track of timer

  // returning a throttled version
  return (arguments) => {
    if (timer === null) {
      // if there is no timer currently running
      funcToExecute(arguments); // execute the function

      // set a timer to clear the timer after specified delay
      timer = setTimeout(() => {
        timer = null; // clearing timer after delay
      }, dealy);
    }
  };
}

function printStar() {
  console.log("----- star ----- ");
}

const throttledFunc = throttle(printStar, 3000);

throttledFunc();
throttledFunc();
throttledFunc();
setTimeout(() => {
  throttledFunc();
}, 3100);
throttledFunc();
