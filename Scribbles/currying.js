function multiply(x, y) {
  return x * y;
}

// currying using bind
const multiplyTwo = multiply.bind(this, 2);

// console.log(multiplyTwo(3));

//currying using closure
function add(x) {
  console.log("inside outer func...");
  return function (y) {
    console.log("X inside inner function -> ", x);
    return x + y;
  };
}

const ans = add(4);

console.log("ans val on invole => ", ans(6));
