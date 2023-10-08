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
