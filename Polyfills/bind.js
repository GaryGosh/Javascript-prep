let obj = {
  firstName: "Neeraj",
  lastName: "TK",
};

function greet(place, city) {
  console.log(this.firstName, " ", this.lastName, " ", place, " ", city);
}

let combined = greet.bind(obj);
combined("Kerala", "Kannur");

Function.prototype.mybind = function (...args) {
  let context = this;
  return function (...args2) {
    context.apply(args[0], args2);
  };
};

let combined2 = greet.mybind(obj);
combined2("Karnataka", "Banglore");
