// The filter() method creates a new array with all elements that pass the test implemented by the provided function

/* 
    Though process
    1. A function which takes a function as an argument and an optional parameter for execution context
    2. The function argument must be passed the array index, the item and the context
    3. The result of the callback invokation is tested, if true the array element is pushed to a new array item
*/
const words = ["adam", "ate", "an", "apple"];

Array.prototype.newFilter = function (callback) {
  let ret = [];

  for (let i = 0; i < this.length; i++) {
    if (this.indexOf(this[i]) > -1) {
      let exists = callback(this[i], i, this);

      exists && ret.push(this[i]);
    }
  }

  return ret;
};

// test 1
const ans = words.newFilter((item) => {
  return item === "an";
});

console.log("ans --> ", ans);

// test 2
const ans2 = words.newFilter((item) => {
  return item !== "an";
});

console.log("ans2 --> ", ans2);
