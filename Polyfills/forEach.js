const arr = [2, 4, 6, 8, 10, 12, 13, 16];

const words = ["adam", "ate", "an", "apple"];

Array.prototype.newForEach = function (callback) {
  for (i = 0; i < this.length; i++) {
    if (this.indexOf(this[i]) > -1) {
      this[i] = callback(this[i], i, this);
    }
  }
};

// test 1
let res = 0;
arr.newForEach((it, indx) => {
  res += it * 2;
});

console.log("result --> ", res);

// test 2
const ans = [];
words.newForEach((it, indx) => {
  ans.push(it.toUpperCase());
});

console.log("ans --> ", ans);
