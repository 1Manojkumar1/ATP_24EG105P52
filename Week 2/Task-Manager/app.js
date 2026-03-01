// import { ... } from './task.js';
// Test your module system
// 1. Add some tasks
// 2. Display all tasks
// 3. Complete a task
// 4. Display all tasks again

//importing the functions from task.js
import {addTask,getAllTasks,completeTask} from './task.js';


// Adding a new task with title "Walk", priority "high", and due date "2026-03-20"
console.log(addTask("Walk","high","2027-03-20"))

// Adding another task with title "play", priority "low", and due date "2026-02-26"
console.log(addTask("play","low","2027-02-26"))

// Adding another task with title "sleep", priority "medium", and due date "2026-03-20"
console.log(addTask("sleep","medium","2027-05-07"))

// Adding another task with title "eat", priority "high", and due date "2026-03-20"
console.log(addTask("eat","high","2027-03-24"))


// Displaying all tasks currently in the system
console.log("All Tasks:\n",getAllTasks())

// Marking the task with id 3 as completed
console.log(completeTask(1))

// Displaying all tasks again to see the updated status
console.log("All Tasks:\n",getAllTasks())
