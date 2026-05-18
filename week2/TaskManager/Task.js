// import { ... } from './validator.js';

// Importing validation functions from validator.js
import {validateTitle,validatePriority,validateDueDate} from './Validate.js'

// Array to store all tasks
const tasks = [];

// Counter to assign unique IDs to tasks
let idCount=1

// 1. Add new task
export function addTask(title, priority, dueDate) {
// Validate using imported functions and return the error message if it is not valid
    if(!validateTitle(title) || !validatePriority(priority) || !validateDueDate(dueDate) ){
    return `Task not added`
    }
//Adding task Id and completion status properties in the task object
    const task={
        id:idCount,
        title:title,
        priority:priority,
        dueDate:dueDate,
        completed:false
    }
// If valid, add to tasks array
    tasks.push(task)
    idCount++
// Return success/error message
    return `Task Added successfully`
}

// 2. Get all tasks
export function getAllTasks() {
// Return all tasks
    return tasks;
}

// 3. Mark task as complete
export function completeTask(taskId) {
// Find task index by ID
    let taskIndex=tasks.findIndex((task)=>task.id===taskId)
    if(taskIndex!=-1){
        // Mark the task as completed
        tasks[taskIndex].completed=true
        // Return success message
        return `Task with Task Id ${taskId} is marked Completed`
    }
    else{
        // Return error if task not found
        return `task with Task Id ${taskId} is not found`
    }
}