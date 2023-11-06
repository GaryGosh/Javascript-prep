/* Debouncing is a way of delaying the execution of a function until a certain amount of time
 has passed since the last time it was called. This can be useful for scenarios where we want 
 to avoid unnecessary or repeated function calls that might be expensive or time-consuming. */

const myDebounce = (callback, delay) => {
  let timer;
  return (...args) => {
    if (timer) clearInterval(timer);

    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

const handleChange = myDebounce((e) => {
  console.log("hi", e.target.value);
}, 1000);
