function Counter() {
  this.counter = 0;

  this.incremnet = () => {
    this.count++;
  };

  this.decrement = () => {
    this.count--;
  };
}

// creating new separate instance every time
let counter = new Counter();
let counter2 = new Counter();

console.log("counter 1 & 2", counter === counter2);

let singleton = (function () {
  let instance;
  return {
    getInstance() {
      if (!instance) {
        instance = new Counter();
      }
      return instance;
    },
  };
})();

// create new instance only if it doesn't exists
// if exists -> reuse that one
let counter3 = singleton.getInstance();
let counter4 = singleton.getInstance();

console.log("counter 3 & 4", counter3 === counter4);
