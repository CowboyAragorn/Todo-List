//let currentDisplayedTasksArray = []
import { listArrayCurrent } from "./menuDisplay";
import addTask from "./addTask";
import { endOfMinute, endOfToday, format, endOfTomorrow, addMinutes } from "date-fns";
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
        changeDueDateBtn.innerHTML = this.dueDate;
        //priorityDisplay.innerHTML = this.priority;
        descriptionDisplay.value = this.description;
    }
    
    function changeDueDate(){
        let calendar = document.getElementById('calendar')
        calendarValue = calendar.value;
        calendarValue = format(new Date(calendarValue), "PPPp")
        currentTask.changeDueDateProperty();
        console.log('hey');
        addListPopoutBoxContainer.style.display = 'none';

    }
    addTask.prototype.changeDueDateProperty = function(){
        this.dueDate = calendarValue;
        changeDueDateBtn.innerHTML = this.dueDate;
    }

   
    //Due date Btn displays popup and edits it to display due date edit info//
    changeDueDateBtn.addEventListener('click', () =>{
        let calendar = document.createElement('input');
            calendar.type = 'datetime-local';
            calendar.id = 'calendar';
            //default time stuff
                let now = new Date(); //new date
                now.setMinutes(now.getMinutes() - now.getTimezoneOffset()); //calc current time
                let intermediateTime = addMinutes(now, 5); //add 5 minutes
                calendar.value = intermediateTime.toISOString().slice(0,16); //convert to ISO and set as default
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





    function editingDescription (){
        
    }

//Old code for switching between button and textarea - thinking too linearly
    /*
let descriptionDisplayContainer = document.getElementById('descriptionDisplayContainer')
let descriptionDisplay = document.getElementById('descriptionDisplay')
let descriptionDisplayInput
    function writeNote(){
        console.log('hi')
        let currentDescriptionValue = descriptionDisplay.innerHTML;
        descriptionDisplayContainer.removeChild(descriptionDisplay);
        let descriptionDisplayInput = document.createElement('textarea');
            descriptionDisplayInput.id = 'descriptionDisplayInput';
            descriptionDisplayInput.value = currentDescriptionValue;
            descriptionDisplayContainer.append(descriptionDisplayInput);
                
    }

    function noteToButton(){  
        console.log('I am quick') 
        descriptionDisplayInput = document.getElementById('descriptionDisplayInput');
        let currentDescriptionValue2 = descriptionDisplayInput.value;
        descriptionDisplayContainer.removeChild(descriptionDisplayInput);
         descriptionDisplay = document.createElement('button');
            descriptionDisplay.id = 'descriptionDisplay';
            descriptionDisplay.value = currentDescriptionValue2;
            descriptionDisplay.innerHTML = descriptionDisplay.value;
            descriptionDisplayContainer.append(descriptionDisplay);
        descriptionDisplay.addEventListener('click', collaborator);
        base.removeEventListener('mousedown', noteToButton)
    }
    
    
    
    descriptionDisplay.addEventListener('click', collaborator);
    
    
    function collaborator (){
        writeNote();
        descriptionDisplayInput = document.getElementById('descriptionDisplayInput');
        descriptionDisplayInput.addEventListener('mousedown', () =>{ //this needs to be mousedown so base doesn't fire before it//
            event.stopImmediatePropagation();   
        })
        base.addEventListener('mousedown', noteToButton)

    }

    */
    
}
