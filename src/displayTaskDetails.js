//let currentDisplayedTasksArray = []
import { listArrayCurrent } from "./menuDisplay";
import addTask from "./addTask";
export default function displayTaskDetails(){
    let allTaskFlexContainers = document.querySelectorAll('.taskFlex')
//Goes through all the posted flexContainer boxes and puts an event listenere
//To post task details to detail panel when clicked
    for(let i=0;i<allTaskFlexContainers.length;i++){
        allTaskFlexContainers[i].addEventListener('click', () =>{
            listArrayCurrent[i].postTaskDetails();
        })
    }
//Posts the decriptions to those saved in the object
    addTask.prototype.postTaskDetails = function(){
        taskTitleDisplay.innerHTML = this.taskName;
        dueDateDisplay.innerHTML = this.dueDate;
        priorityDisplay.innerHTML = this.priority;
        descriptionDisplay.innerHTML = this.description;
    }


}
