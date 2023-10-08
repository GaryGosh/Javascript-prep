let inputArr = [
  1,
  2,
  [3],
  [4, 5, [6, 7, [8]], 9],
  [10, [11, [12, [13, [14]]]]],
  15,
  16,
  [17, 18, [19, 20, [21, 22, [23, 24, [25]]]]],
];

// method 1 - using recursion

function flatten() {
  console.log("this", this);

  const output = [];

  function process(arr) {
    // iterate over the array & check each element; if array recursively call the  function else push it to result
    for (let i = 0; i < arr.length; i++) {
      let el = arr[i];
      if (Array.isArray(el)) {
        process(el);
      } else {
        output.push(el);
      }
    }
  }

  // calling process funtion on the array which is called with prototype method
  process(this);
  return output;
}

Array.prototype.flatten = flatten;

let res = inputArr.flatten();
// console.log("res -> ", res);

// method 2 - converting into string

function flatten2() {
  return this.toString()
    .split(",")
    .map((el) => el);
}

Array.prototype.flatten2 = flatten2;
console.log("res -> ", inputArr.flatten2());
