//This factory function creates tasks with a name, description, and dueDate//
export default function addTask(taskName, description, dueDate, 
    priority, completeStatus, deleteEligible, formerArrayPosition, currentArrayPosition,){
    this.taskName = taskName
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.completeStatus = completeStatus
    this.deleteEligible = deleteEligible
    this.formerArrayPosition = formerArrayPosition
    this.currentArrayPosition = currentArrayPosition
}