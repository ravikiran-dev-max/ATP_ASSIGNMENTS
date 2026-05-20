# Task Management Module (JavaScript)

This project demonstrates a **modular task management system** in JavaScript.  
It uses **validation functions**, a **task manager**, and a **main runner** to simulate adding, listing, and completing tasks.

---

## File Structure

- `Validate.js` → Validation functions for task inputs
- `task.js` → Task management logic (add, get all, complete)
- `app.js` → Main runner that imports and executes task functions

---

## Concepts Covered

### 1. Validation (`Validate.js`)
- **validateTitle(taskTitle)** → ensures title is not empty and has at least 3 characters.
- **validatePriority(taskPriority)** → ensures priority is one of `"low"`, `"medium"`, `"high"`.
- **validateDueDate(dueDate)** → ensures due date is in the future.

### 2. Task Management (`task.js`)
- **addTask(title, priority, dueDate)**  
  - Validates inputs using functions from `Validate.js`.  
  - Adds a task with unique ID and `completed: false`.  
  - Returns success/error message.
- **getAllTasks()** → returns all tasks in the system.
- **completeTask(taskId)** → marks a task as completed if found.

### 3. Application Runner (`app.js`)
- Imports functions from `task.js`.
- Demonstrates:
  - Adding multiple tasks.
  - Displaying all tasks.
  - Marking a task as complete.
  - Displaying updated tasks.

---
### Sample Out Put
Task Added successfully
Task Added successfully
Task Added successfully
Task Added successfully
All Tasks:
 [
  { id: 1, title: 'Walk', priority: 'high', dueDate: '2027-03-20', completed: false },
  { id: 2, title: 'play', priority: 'low', dueDate: '2027-02-26', completed: false },
  { id: 3, title: 'sleep', priority: 'medium', dueDate: '2027-05-07', completed: false },
  { id: 4, title: 'eat', priority: 'high', dueDate: '2027-03-24', completed: false }
]
Task with Task Id 1 is marked Completed
All Tasks:
 [
  { id: 1, title: 'Walk', priority: 'high', dueDate: '2027-03-20', completed: true },
  { id: 2, title: 'play', priority: 'low', dueDate: '2027-02-26', completed: false },
  { id: 3, title: 'sleep', priority: 'medium', dueDate: '2027-05-07', completed: false },
  { id: 4, title: 'eat', priority: 'high', dueDate: '2027-03-24', completed: false }
]

---

## Usage

Run the app with Node.js:

```bash
node app.js
