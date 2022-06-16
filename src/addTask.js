//This factory function creates tasks with a name, description, and dueDate//
export default function addTask(taskName, description, dueDate, priority, completeStatus, formerArrayPosition){
    this.taskName = taskName
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.completeStatus = completeStatus
    this.formerArrayPosition = formerArrayPosition
}