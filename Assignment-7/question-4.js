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

  // Process tasks in the queue respecting the concurrency limit
  processQueue() {
    if (this.running >= this.limit || this.queue.length === 0) {
      return; // If the limit is reached, or no tasks in the queue
    }

    // Get the next task from the queue
    const nextTask = this.queue.shift();
    this.running++; // Increment running task count

    // Execute the task
    nextTask().finally(() => {
      this.running--; // Decrement running task count after the task is done
      this.processQueue(); // Continue processing the next tasks in the queue
    });
  }
}

// Simulate a task (returns a promise that resolves after a given time)
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

// Example Usage:
const rateLimiter = new RateLimiter(2); // Limit to 3 concurrent tasks


for (let i = 1; i <= 5; i++) {
  rateLimiter.addTask(createTask(i, 1000)); // Each task takes 1 second
}
