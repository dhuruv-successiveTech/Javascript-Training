// Q5. Write a program to implement a Promise-based task queue, that processes tasks in a specified order, with a specified concurrency limit

// Ans.

class PromiseBasedTaskQueue {
  constructor(limit) {
    this.limit = limit;  // Concurrency limit
    this.queue = [];      // Task queue
    this.running = 0;     // Running tasks count
  }

  // Add task to the queue with priority
  addTask(task, priority = 0) {
    return new Promise((resolve, reject) => {
      this.queue.push({task : () => task().then(resolve).catch(reject), priority});

      // Sort the queue by priority (lower number = higher priority)
      this.queue.sort((a, b) => a.priority - b.priority);
      this.processQueue(); // Start processing tasks if possible
    });
  }

  processQueue() {
    if (this.running >= this.limit || this.queue.length === 0) {
      return; 
    }

    const nextTask = this.queue.shift();  // Get highest priority task
    this.running++;  // Increment running task count

    nextTask.task() // Execute the task
      .finally(() => {
        this.running--; // Decrement running task count
        this.processQueue();
      });
  }
}

const createTask = (id, time) => {
  return () => new Promise((resolve) => {
    console.log(`Task ${id} started`);
    setTimeout(() => {
      console.log(`Task ${id} finished after ${time}ms`);
      resolve();
    }, time);
  });
};


const queue = new PromiseBasedTaskQueue(2);

// Add tasks to the queue with different priorities
queue.addTask(createTask(1, 2000), 1);  // Task 1 with priority 1
queue.addTask(createTask(2, 2000), 2);  // Task 2 with priority 2
queue.addTask(createTask(3, 2000), 4);  // Task 3 with priority 4 
queue.addTask(createTask(4, 2000), 3);  // Task 4 with priority 3
queue.addTask(createTask(5, 2000), 0);  // Task 5 with priority 0 (highest priority)

