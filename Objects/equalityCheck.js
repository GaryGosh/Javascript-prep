const personA = {
  name: "Neeraj",
  Age: 26,
  hobbies: ["Basket ball", "Gardening", "Youtube"],
  favourites: {
    show: "Orphan Black",
    sports: "NBA",
  },
};

const personB = {
  name: "Neeraj",
  Age: 26,
  hobbies: ["Basket ball", "Gardening", "Youtube"],
  favourites: {
    show: "Orphan Black",
    sports: "NBA",
  },
};

// method 1 - converting to string

// const isDeepEqual = (obj1, obj2) => {
//   let str1 = JSON.stringify(obj1);
//   let str2 = JSON.stringify(obj2);

//   return str1 === str2;
// };

// console.log("isEqual -> ", isDeepEqual(personA, personB));

// method 2
const isDeepEqual = (obj1, obj2) => {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1?.length !== keys2?.length) return false;

  for (let key of keys1) {
    let val1 = obj1[key];
    let val2 = obj2[key];

    const isObjects = isObject(val1) && isObject(val2);

    if (
      (isObjects && !isDeepEqual(val1, val2)) ||
      (!isObjects && val1 !== val2)
    ) {
      return false;
    }
  }
  return true;
};

const isObject = (obj) => {
  return obj != null && typeof obj === "object";
};

console.log("isEqual -> ", isDeepEqual(personA, personB));
