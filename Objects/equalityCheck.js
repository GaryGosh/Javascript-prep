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
const isDeepEqual = (obj1, obj2) => {
  let str1 = JSON.stringify(obj1);
  let str2 = JSON.stringify(obj2);

  return str1 === str2;
};

console.log("isEqual -> ", isDeepEqual(personA, personB));
