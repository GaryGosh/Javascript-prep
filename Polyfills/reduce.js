const queryString = "cat=meow&duck=quack&dog=woof";
const querArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.newReduce = function (callback, startingVal) {
  let accumulator = startingVal || undefined;

  for (let i = 0; i < this.length; i++) {
    if (accumulator) {
      accumulator = callback(accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }

  return accumulator;
};

// test 1
const ans = queryString.split("&").newReduce((acc, cur) => {
  let splitted = cur.split("=");
  acc[splitted[0]] = splitted[1];

  return acc;
}, {});

console.log("ans --> ", ans);

// test 2
const res = querArr.newReduce((acc, curr) => {
  return (acc += curr);
}, 0);

console.log("res --> ", res);
