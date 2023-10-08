// Write an analytics SDK that exposes logEvent, it takes in analytics events and queues them
// - pass a function sendAnalyticsEvent as a parameter (implement a stub function that resolves in 1 second and fails every n % 5 times)
// - send the next event to sendAnalyticsEvent when only after it resolves
// - when the failure occurs attempt a retry

const SDK = function () {
  // queue to hold the logs
  this.queue = [];
  this.count = 1;

  this.log = function (event) {
    this.queue.push(event);
  };

  // stub function
  this.wait = () =>
    new Promise((resolve, reject) => {
      // using promise since it will resolve in future and setTimeout since that resolves after 1 sec
      setTimeout(() => {
        if (this.count % 5 === 0) {
          reject();
        } else {
          resolve();
        }
      }, 1500);
    });

  this.sendAnalyticsEvent = async () => {
    // base case
    if (this.queue.length === 0) return;

    const current = this.queue.shift();

    try {
      await this.wait();
      console.log("logged ... ", current);
      this.count++;
    } catch (error) {
      console.log("----------------------");
      console.log("failed ... ", current);
      console.log("retrying .......... ");
      console.log("----------------------");

      this.count = 1;
      this.queue.unshift(current);
    } finally {
      this.sendAnalyticsEvent();
    }
  };
};

const sdk = new SDK();

sdk.log("event 1");
sdk.log("event 2");
sdk.log("event 3");
sdk.log("event 4");
sdk.log("event 5");
sdk.log("event 6");
sdk.log("event 7");
sdk.log("event 8");
sdk.log("event 9");
sdk.log("event 10");

sdk.sendAnalyticsEvent();
