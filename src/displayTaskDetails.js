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

    changeDueDateBtn.addEventListener('click', () =>{
        let calendar = document.createElement('input');
            calendar.type = 'datetime-local';
            calendar.id = 'calendar';
            calendar.classList.add('popoutItem');
            addListInputContainer.append(calendar)
        addListPopoutBoxContainer.style.display = 'block'; //this is now just the main popout;
        addListNameDisplay.innerHTML = 'Pick Date';
        //Have to put these here so it can grab the ID before emptying;
        //Empty the popup
        const elements = document.getElementsByClassName('popoutItem');
        while(elements.length > 0){ 
            addListInputContainer.removeChild(elements[0]);
        }
        //Add the addList materials//
        addListInputContainer.append(calendar);
        //addListInputContainer.append(addListPopupBtn);
    })


}
