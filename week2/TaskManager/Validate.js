// 1. Validate task title (not empty, min 3 chars)
export function validateTitle(taskTitle) {
    // Check if title is empty or less than 3 characters
    if(!taskTitle || taskTitle.length<3){
        return false
    }
    // Return true if valid
    return true
}

// 2. Validate priority (must be: low, medium, high)
export function validatePriority(taskPriority) {
    // Define valid priority values
    let validPriorities=["low","medium","high"]
    // let result=priorities.includes(priority)
    // Check if the provided priority exists in validPriorities array
    if(validPriorities.findIndex((priorityName)=>priorityName===taskPriority)===-1){
        return false
    }
    // Return true if valid
    return true
}

// 3. Validate due date (must be future date)
export function validateDueDate(dueDate) {
    // Convert input string to Date object
    let dueDateObj=new Date(dueDate)
    // Get current date
    let today=new Date()
    // Check if due date is in the past
    if(dueDateObj<today){
        return false
    }
    // Return true if due date is valid (future date)
    return true
}