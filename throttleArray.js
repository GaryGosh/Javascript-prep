// Implement a throttler that executes an array of tasks.
// When the throttler is passed a number, only executes that number of the tasks and passes the other tasks into a queue.
// throttle(task, count, 2000);

function ArrayThrottler() {
  this.queue = [];

  this.tasks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  this.count = 5;

  this.addToQueue = (task) => {
    this.queue.push(task);
  };

  this.throttle = (task, count, time) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          for (i = 0; i < count; i++) {
            this.addToQueue(task[i]);
          }

          task.splice(0, count);
        } catch (error) {
          reject(error);
        }
      }, time);
    });
  };
}
