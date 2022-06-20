//let currentDisplayedTasksArray = []
import { listArrayCurrent } from "./menuDisplay";
import addTask from "./addTask";
import { format } from "date-fns";
export default function displayTaskDetails(){

    let allTaskFlexContainers = document.querySelectorAll('.taskFlex');
    let currentTask //Define here so we can edit throughout
    let calendarValue
//Goes through all the posted flexContainer boxes and puts an event listenere
//To post task details to detail panel when clicked
    for(let i=0;i<allTaskFlexContainers.length;i++){
        allTaskFlexContainers[i].addEventListener('click', () =>{
            listArrayCurrent[i].postTaskDetails();
            currentTask = listArrayCurrent[i];//Make the clicked task the current task for editing throughout
        })
    }
//Posts the decriptions to those saved in the object
    addTask.prototype.postTaskDetails = function(){
        taskTitleDisplay.innerHTML = this.taskName;
        dueDateDisplay.innerHTML = this.dueDate;
        priorityDisplay.innerHTML = this.priority;
        descriptionDisplay.innerHTML = this.description;
    }
    
    function changeDueDate(){
        let calendar = document.getElementById('calendar')
        calendarValue = calendar.value;
        calendarValue = format(new Date(calendarValue), "PPPp")
        currentTask.changeDueDateProperty();
        console.log('hey')
    }
    addTask.prototype.changeDueDateProperty = function(){
        this.dueDate = calendarValue;
        dueDateDisplay.innerHTML = this.dueDate;
    }

    //Due date Btn displays popup and edits it to display due date edit info//
    changeDueDateBtn.addEventListener('click', () =>{
        let calendar = document.createElement('input');
            calendar.type = 'datetime-local';
            calendar.id = 'calendar';
            calendar.classList.add('popoutItem');
        let addDatePopoutBtn = document.createElement('button');
            addDatePopoutBtn.id = 'addDatePopoutBtn';
            addDatePopoutBtn.classList.add('btn','popoutItem');
            addDatePopoutBtn.innerHTML = '+';
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
        addListInputContainer.append(addDatePopoutBtn);
        addDatePopoutBtn.addEventListener('click', changeDueDate);
    })


}
