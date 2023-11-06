// storing (caching) the result of expensive function calls
// return the cached result for the same inputs

function memoize(fn) {
  let cache = {};

  return function () {
    //using cache here (closure)
    const args = JSON.stringify(arguments);
    console.log("arguments ", arguments);

    // if exists in cache return directly
    if (cache[args]) {
      console.log("fetching from cache");
      return cache[args];
    }

    // else do the computation
    console.log("doing computation");
    const computedResult = fn.apply(this, arguments);
    cache[args] = computedResult;
    return computedResult;
  };
}

// test 1
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return factorial(n - 1) * n;
}

const memoizedFactorail = memoize(factorial);
console.log(memoizedFactorail(20)); // slow
console.log(memoizedFactorail(20)); // fast
console.log(memoizedFactorail(20)); // fast
