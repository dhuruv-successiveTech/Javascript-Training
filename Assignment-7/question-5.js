// Write a program to implement a Promise-based task queue, that processes tasks in a specified order, with a specified concurrency limit

// Ans.

class PromiseBasedTaskQueue {
  constructor(limit) {
    this.limit = limit;
    this.queue = []; // Stores tasks waiting for being processed
    this.running = 0; // Keeps running tasks count
    this.completedTaskQueue = [];
  }

  addTask(task) {
    return new Promise((resolve, reject) => {
      this.queue.push({ task, resolve, reject });
      this.processQueue();
    });
  }

  async processQueue() {
    while(this.running<this.limit && this.queue.length>0){
        const {task,resolve,reject} = this.queue.shift();
        this.running++;

        task()
        .then(res => {
          resolve(res)  // resolve promise 
        })
        .catch((error)=>reject(err))
        .finally(()=>{
          this.running--;
          this.processQueue();
        })
    }
  }
}

const createTask = (id,time) =>{
  new Promise((resolve,reject)=>{
    console.log(`Task ${id} started`);
    setTimeout(()=>{
      console.log(`Task ${id} finished`);
      resolve(`Task ${id} completed successfully after ${time}ms`)
    },time)
  }) 
}

const queue = new PromiseBasedTaskQueue(3);

// Add task to queue

queue.addTask(createTask(1,2000))
.then
