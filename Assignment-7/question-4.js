// Q4. Write a program to implement a Promise-based rate limiter, that limits the number of concurrent requests to a certain number

class RateLimiter {
  constructor(limit) {
    this.limit = limit; // Maximum number of concurrent tasks
    this.running = 0; // Number of tasks currently running
    this.queue = []; // Task queue (tasks waiting to be processed)
  }

  // Add a task to the rate limiter
  addTask(task) {
    return new Promise((resolve, reject) => {
      this.queue.push(() => task().then(resolve).catch(reject));
      this.processQueue(); // Try to process the task
    });
  }

  processQueue() {
    if (this.running >= this.limit || this.queue.length === 0) {
      return; // If the limit is reached, or no tasks in the queue
    }

    const nextTask = this.queue.shift();
    this.running++; // Increment running task count

    // Execute the task
    nextTask().finally(() => {
      this.running--; 
      this.processQueue(); 
    });
  }
}

const createTask = (id, time) => {
  return () =>
    new Promise((resolve) => {
      console.log(`Task ${id} started`);
      setTimeout(() => {
        console.log(`Task ${id} finished after ${time}ms`);
        resolve(`Task ${id} completed after ${time}ms`);
      }, time);
    });
};

const rateLimiter = new RateLimiter(2); 


for (let i = 1; i <= 5; i++) {
  rateLimiter.addTask(createTask(i, 1000)); // Each task takes 1 second
}
