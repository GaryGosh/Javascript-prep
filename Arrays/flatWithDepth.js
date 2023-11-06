function myFlat(arr, depth = 1) {
  let res = [];

  arr.forEach((el) => {
    if (Array.isArray(el) && depth > 0) {
      res.push(...myFlat(el, depth - 1));
    } else {
      res.push(el);
    }
  });

  return res;
}

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

let ans = myFlat(inputArr, 2);
console.log("ans ", ans);
