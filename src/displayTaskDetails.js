//let currentDisplayedTasksArray = []

//called from pinlist
import { listArrayCurrent, btnArray, listArray } from "./menuDisplay";
import addTask from "./addTask";
import { format,addMinutes } from "date-fns";

//Display flag must be declared up here so it can be edited safely
let displayedFlag
let changeDueDateBtn
let currentTask //Define here so we can edit throughout
export default function displayTaskDetails(){

    
    //let currentTask
    let calendarValue
    let taskInfoDisplayContainer 
    let dueDateDisplayContainer 
    let dueDateTitle
    let dueDateDisplay 
    let changeDueDateBtn 
    let descriptionDisplayContainer 
    let descriptionTitle 
    let descriptionDisplay 

    function putEverythingOnInfoBoard(){
        let taskInfoPopoutBox = document.getElementById('taskInfoPopoutBox');
         taskInfoDisplayContainer = document.createElement('div');
            taskInfoDisplayContainer.id = 'taskInfoDisplayContainer'
            taskInfoPopoutBox.append(taskInfoDisplayContainer)
         dueDateDisplayContainer = document.createElement('div');
            dueDateDisplayContainer.id = "dueDateDisplayContainer"
            taskInfoDisplayContainer.append(dueDateDisplayContainer);
                 dueDateTitle = document.createElement('div');
                    dueDateTitle.id = 'dueDateTitle';
                    dueDateTitle.classList.add('infoTitle');
                    dueDateTitle.innerHTML = 'Finish by';
                    dueDateDisplayContainer.append(dueDateTitle);
                 dueDateDisplay = document.createElement('div');
                    dueDateDisplay.id = 'dueDateDisplay';
                    dueDateDisplayContainer.append(dueDateDisplay);
                 changeDueDateBtn = document.createElement('button');
                    changeDueDateBtn.id = 'changeDueDateBtn';
                    changeDueDateBtn.classList.add('btn');
                    dueDateDisplayContainer.append(changeDueDateBtn)
         descriptionDisplayContainer = document.createElement('div');
            descriptionDisplayContainer.id = "descriptionDisplayContainer"
            taskInfoDisplayContainer.append(descriptionDisplayContainer);
                 descriptionTitle = document.createElement('div');
                    descriptionTitle.id = 'descriptionTitle';
                    descriptionTitle.classList.add('infoTitle');
                    descriptionTitle.innerHTML = 'Notes';
                    descriptionDisplayContainer.append(descriptionTitle);
                 descriptionDisplay = document.createElement('textarea')
                    descriptionDisplay.id = 'descriptionDisplay';
                    descriptionDisplayContainer.append(descriptionDisplay);
         displayedFlag = true;
    }

    function takeEverythingOffInfoBoard(){
        let taskInfoPopoutBox = document.getElementById('taskInfoPopoutBox');
        let taskInfoDisplayContainer = document.getElementById('taskInfoDisplayContainer')
        let dueDateDisplayContainer = document.getElementById('dueDateDisplayContainer')
        let dueDateTitle = document.getElementById('dueDateTitle')
        let dueDateDisplay = document.getElementById('dueDateDisplay')
        let changeDueDateBtn = document.getElementById('changeDueDateBtn')
        let descriptionDisplayContainer = document.getElementById('descriptionDisplayContainer')
        let descriptionTitle = document.getElementById('descriptionTitle')
        let descriptionDisplay = document.getElementById('descriptionDisplay')
        
    
        taskInfoPopoutBox.removeChild(taskInfoDisplayContainer);
        taskInfoDisplayContainer.removeChild(dueDateDisplayContainer);
        dueDateDisplayContainer.removeChild(dueDateTitle);
        dueDateDisplayContainer.removeChild(dueDateDisplay);
        dueDateDisplayContainer.removeChild(changeDueDateBtn);
        taskInfoDisplayContainer.removeChild(descriptionDisplayContainer);
        descriptionDisplayContainer.removeChild(descriptionTitle);
        descriptionDisplayContainer.removeChild(descriptionDisplay);
        displayedFlag = false;
    }
   
    //Posts the decriptions to those saved in the object
    addTask.prototype.postTaskDetails = function(){
        let changeDueDateBtn = document.getElementById('changeDueDateBtn');
        let descriptionDisplay = document.getElementById('descriptionDisplay');
        taskTitleDisplay.innerHTML = this.taskName;
        changeDueDateBtn.innerHTML = this.dueDate;
        //priorityDisplay.innerHTML = this.priority;
        descriptionDisplay.value = this.description;
    }

    //puts event listeners on the clickable tasks
    function taskButtonDisplayAssigner(){
        let allTaskFlexContainers = document.querySelectorAll('.taskFlex');
        for(let i=0;i<allTaskFlexContainers.length;i++){
            allTaskFlexContainers[i].addEventListener('click', ()=>{
                removeAndReAdd();
                console.log(listArray[i])
                listArrayCurrent[i].postTaskDetails();
                currentTask = listArrayCurrent[i];//Make the clicked task the current task for editing throughout
                console.log('currentTaskTop')
                console.log(currentTask)
            })
        }
    }

    function removeAndReAdd(){
         takeEverythingOffInfoBoard();
         putEverythingOnInfoBoard();
         changeDueDateBtnEventListener();
    }

    //event listeners for changing lists
    function listButtonDisplayAssigner(){
        for(let i=0;i<btnArray.length;i++){ 
            btnArray[i].addEventListener('click', ()=>{
                removeAndReAdd();
                taskButtonDisplayAssigner();
                console.log(listArrayCurrent[0])
                listArrayCurrent[0].postTaskDetails(); //auto displays first task in list//
                currentTask = listArrayCurrent[0];
            })
        }
    }

        addTask.prototype.saveDescriptionPrototype = function(){
            let descriptionDisplay = document.getElementById('descriptionDisplay');
            this.description = descriptionDisplay.value;
        }

        function saveDescription(){
            currentTask.saveDescriptionPrototype();
            console.log('I saved!')
        }
        //lets you click off anywhere to save
        function baseEventListenerAdder(){
            base.addEventListener('click',saveDescription, true);
        }
    //controls this whole thing, only function called
    function infoDisplayController(){
        //This is for keeping persistence when crossing items. Info display stays on crossed item
        if(displayedFlag == true){
            removeAndReAdd();
            currentTask.postTaskDetails();
            base.removeEventListener('click',saveDescription, true);
        }
        //If there is nothng on board IE first time opening a list, then default it to 0
        else{
            putEverythingOnInfoBoard();
            listArrayCurrent[0].postTaskDetails(); //auto displays first task in list//
            currentTask = listArrayCurrent[0];
        }
        changeDueDateBtnEventListener();
        console.log(listArray[0])
        taskButtonDisplayAssigner();
        listButtonDisplayAssigner();
        baseEventListenerAdder();
    }
    
    //These three control updating calendar
    function changeDueDate(){
            let calendar = document.getElementById('calendar')
            calendarValue = calendar.value;
            calendarValue = format(new Date(calendarValue), "PPPp")
            currentTask.changeDueDateProperty();
            console.log('hey');
            addListPopoutBoxContainer.style.display = 'none';

        }
        addTask.prototype.changeDueDateProperty = function(){
            let changeDueDateBtn = document.getElementById('changeDueDateBtn')
            this.dueDate = calendarValue;
            changeDueDateBtn.innerHTML = this.dueDate;
        }
    function changeDueDateBtnEventListener(){
        //Due date Btn displays popup and edits it to display due date edit info//
        let changeDueDateBtn = document.getElementById('changeDueDateBtn')
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
    }

    infoDisplayController();
}
