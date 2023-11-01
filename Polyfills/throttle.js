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
