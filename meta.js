const person = {
  name: "Ram",
  age: 36,
};

// const res = Object.entries(person);

// console.log(res);

const convertToEntries = (obj) => {
  let res = [];

  Object.keys(obj).forEach((key) => {
    let combined = [key, obj[key]];
    res.push(combined);
  });
  return res;
};

const ans = convertToEntries(person);
console.log("ans ", ans);
