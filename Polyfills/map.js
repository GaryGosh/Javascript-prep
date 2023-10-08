const arr = [1, 2, 3, 4, 5, 6, 7, 8];

Array.prototype.newMap = function (callback) {
  let ret = [];

  for (let i = 0; i < this.length; i++) {
    if (this.indexOf(this[i]) > -1) {
      let val = callback(this[i], i, this);

      ret.push(val);
    }
  }

  return ret;
};

// test 1
const testRes = arr.newMap((it) => it * 2);
console.log("test res --> ", testRes);

// test 2
const testRes2 = arr.newMap((it, index) => {
  return `idx ${index} - ${it}`;
});

console.log("testRes2 ", testRes2);
