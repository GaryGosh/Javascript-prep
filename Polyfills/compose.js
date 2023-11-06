function addFive(a) {
  return a + 5;
}

function subtractTwo(a) {
  return a - 2;
}

function multiplyFour(a) {
  return a * 4;
}

const myCompose = (...functions) => {
  return (args) => {
    return functions.reduceRight((arg, fn) => fn(arg), args);
  };
};

const eveluate = myCompose(addFive, subtractTwo, multiplyFour);

console.log(eveluate(5));
