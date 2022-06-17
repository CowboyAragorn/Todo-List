import addTask from './addTask';
import {deleteTasks, crossedTasks} from './deleteTasks';

//declare listArray here for export later
let listArray = []
let btnArray = []
let listArrayCurrent
let listArrayCurrentName
let currentCrossTaskButtonsArray = []
let deleteTaskButtonsArray = []
let taskDisplayArray = []
let sortTracker
let iTracker//itracker here connects directly above to pinLists. Lets me change the original array in
let formerArrayPositionTracker




//This function controls display on the popup. This includes clicks from the side menu, additions from the popup//
function openLists (){
    //taskPopoutBox.style.display = 'none'; //Defaults popup to invisible before a list is clicked
    //Displays the addToList popup when clicked in menu
    addListBtn.addEventListener('click', () =>{
        addListPopoutBoxContainer.style.display = 'block'
    })
        //Preset lists//
            const mondayGrocery = new addTask(
                'Oranges',
                'List for Week 4/4',
                '4/10',
                'High'
            )
            const wedGrocery = new addTask(
                'Pears',
                'List for Week 4/4',
                '4/10',
                'High'
            )
            const fridayGrocery = new addTask(
                'Grapes',
                'List for Week 4/4',
                '4/10',
                'High'
            )
            let groceryListArray = [mondayGrocery, wedGrocery, fridayGrocery,];
                groceryListArray.innerHTML = 'Grocery List';

                const laundry = new addTask(
                    '1',
                    'List for Week 4/4',
                    '4/10',
                    'High'
                )
                const laundry2 = new addTask(
                    '2',
                    'List for Week 4/4',
                    '4/10',
                    'High'
                )
                const laundry3 = new addTask(
                    '3',
                    'List for Week 4/4',
                    '4/10',
                    'High'
                )
                const laundry4 = new addTask(
                    '4',
                    'List for Week 4/4',
                    '4/10',
                    'High'
                )
                const laundry5 = new addTask(
                    '5',
                    'List for Week 4/4',
                    '4/10',
                    'High'
                )
            let houseListArray = [laundry, laundry2, laundry3, laundry4, laundry5,];
                houseListArray.innerHTML = 'Housework List';
        //these ID's were defined in the skeleton//
            let groceryBtn = document.getElementById('0');
            let houseBtn = document.getElementById('1');

        btnArray = [groceryBtn, houseBtn,] 
        listArray = [groceryListArray, houseListArray,]
}

   //This prototype is being called to display the categories from the lists on to the popup, it also creates the buttons//
   addTask.prototype.displayList = function(){
        let taskFlexContainer = document.createElement('div');
            taskFlexContainer.id = 'taskFlexContainer';
            taskFlexContainer.classList = 'taskFlex'
        //buttons to cross a task off, moving it to bottom of the array//
        let taskCrossBtn = document.createElement('button');
            taskCrossBtn.classList.add('taskCrossBtn', 'btn');
            currentCrossTaskButtonsArray.push(taskCrossBtn); //array of buttons for crossing tasks//
        let taskDisplayElement = document.createElement('p');
            taskDisplayElement.innerHTML = this.taskName;
            taskDisplayElement.classList = 'task';
        //buttons to remove a task from the array after being crossed off
        let deleteTaskBtn = document.createElement('button');
            deleteTaskBtn.classList.add('deleteTasktBtn', 'btn', 'taskCrossBtn');
        //append everything
        let taskDisplayContainer = document.getElementById('taskDisplayContainer');
        taskDisplayContainer.append(taskFlexContainer);
        taskFlexContainer.append(taskCrossBtn);
        taskFlexContainer.append(taskDisplayElement);
        //if crossed, make it look crossed and append the final delete button
        if(this.completeStatus == 'crossed'){ //tracks complete status modified in deleteTasks//
            taskDisplayElement.classList.add('crossed');
            taskFlexContainer.classList.add('crossed');
            this.deleteEligible = 'eligible';//Make it eligible for deletion
            deleteTaskButtonsArray.push(deleteTaskBtn); //push to an array of buttons for deleting tasks, needs to be here so that it doesn't append invisible buttons//
            taskFlexContainer.append(deleteTaskBtn);
        }
        //Make sure something can't be deleted//
        else{
            this.deleteEligible = 'ineligible';
        }
 }

//These two prototypes work with pinList to sort the displayed by checked/unchecked
    addTask.prototype.sortUncheckedDisplayArray = function(){
        if(this.completeStatus == undefined || this.completeStatus == 'incomplete'){ //if uncrossed
            taskDisplayArray.push(sortTracker) //sortTracker is listArrayCurrent
            taskDisplayArray.sort((a,b) => {
                return a.formerArrayPosition - b.formerArrayPosition;
            });
        }
        else{
            return
        }
    }

    addTask.prototype.sortCheckedDisplayArray = function(){
        if(this.completeStatus == 'crossed'){
            taskDisplayArray.push(sortTracker);
        }
        else{
            return
        }
    }




 //pin list and assign buttons are fundamentally connected because of listArrayCurrent, which is the array within the array//

 //sorts the array between what is 
function pinList(){
    taskDisplayArray = [] //Empty the taskDisplay array from last run so that it doesn't overflow with old values
    const elements = document.getElementsByClassName('taskFlex');
    //Empties the visual display for repinning
    while(elements.length > 0){ 
        taskDisplayContainer.removeChild(elements[0]);
      
        currentCrossTaskButtonsArray = []; //Need to reset this array so that the i in deleteTasks doesn't continually count. Perhaps a bit too entertwined//
        deleteTaskButtonsArray = []; //same
    }

    for(let p = 0; p < listArrayCurrent.length; p++){ //push the unchecked items listArray to the taskDisplay array
        sortTracker = listArrayCurrent[p]
        listArrayCurrent[p].sortUncheckedDisplayArray();
    } 
    for(let p = 0; p < listArrayCurrent.length; p++){ //push the checked off items to the taskDisplay array so they pin below
        sortTracker = listArrayCurrent[p]
        listArrayCurrent[p].sortCheckedDisplayArray();
    } 
    listArrayCurrent = [] //empty listArray for refill at bottom of function

    for(let p = 0; p < crossedTasks.length; p++){ //push crossed tasks array from deleteTasks to display array. This will make them appear at the bottom.
        taskDisplayArray.push(crossedTasks[p])
    }
    for(let p = 0; p < taskDisplayArray.length; p++){  //display the taskDisplayArray
        taskDisplayArray[p].displayList();
    } 
    deleteTasks(); //run delete tasks to assign event listener to new checkoff buttons

    for(let p = 0; p < taskDisplayArray.length; p++){//push all the display array to the previously emptied current list array for display if changing lists//
        listArrayCurrent.push(taskDisplayArray[p]) //saves temporary copy for when list is selected
     } 
     console.log('listArrayCurrentAtEndOfPinning')
     console.log(listArrayCurrent)
     listArray[iTracker] = listArrayCurrent; //changes original array so that modifications save whens switching b/w lists
}


//listArrays directly so that it doesn't reset when hitting the list button
//for loop here assigns event listener to menu list buttons to display task information from storage arrays - IIFE//
function assignButtons(){
    for(let i=0; i < btnArray.length;i++){ //Goes through each item in button array and assigns said event listener
        btnArray[i].addEventListener('click', () =>{
            let taskPopoutBox = document.getElementById('taskPopoutBox');
            taskPopoutBox.style.display = 'flex'; //makes the popout list box appear when clicking the list button on side menu
            let listNameDisplay = document.getElementById('listNameDisplay');
                listNameDisplay.innerHTML = btnArray[i].innerHTML;
                //selects the number in the listArray equivalent with the position in the buttonArray, allowing selection of the correct list//
                //Button array cycles through at start of function & assigns the i valueto select the correct item in the array. This is PRE-DONE at beginning of function.
                console.log(listArrayCurrent);
                iTracker = i
                listArrayCurrent = listArray[i];    //sets variable to be used so in nested loop so that nested loop doesn't move through to different part of the array through accidental incrementing//
                console.log(listArrayCurrent)
                listArrayCurrentName = listNameDisplay.innerHTML;
                console.log(listArrayCurrentName)
            assignFormerPositions();
            pinList();
    })
    }
};


//this prototype saves positions for tracking
addTask.prototype.saveFormerArrayPosition = function(){
    this.formerArrayPosition = formerArrayPositionTracker;
}

    //Assigns former array position for sorting
function assignFormerPositions(){
    
    //sorts the current list to make sure everything gets its correct position number.
    //This means crossed items retain their original position
    listArrayCurrent.sort((a,b) => {
        return a.formerArrayPosition - b.formerArrayPosition;
    });
    for(let p = 0; p < listArrayCurrent.length; p++){ //loop through current array assigning tracking number
        formerArrayPositionTracker = p;
        listArrayCurrent[p].saveFormerArrayPosition(); //saves current position through prototype
        
    }    
}


//This controls the built in adding of tasks by user input located on the tasks display popup --IIFE//
//Located here because of pinList//
function addTaskToList () {
    let addTaskButton = document.getElementById('addTaskBtn');
    //would this be cleaner just put into to event listener rather than calling function at end?//
    function addTaskWhenClickBtn (){
        let userTaskInput = document.getElementById('userTaskInput');
        let userTaskInputValue = userTaskInput.value
        //If statement catches edge case of not having a value or only putting in spaces//
            if(userTaskInputValue.trim().length === 0){
                userTaskInputValue = ''
                return
            }
            else{
            //creates new addtask, pushes it to current array, pins it to board, erases what is typed//
            let userAddTask = new addTask(
                userTaskInputValue,
                'List for Week 4/4',
                '4/10',
                'High',
                'incomplete'
            )
        listArrayCurrent.push(userAddTask);
        assignFormerPositions();
        pinList();
        userTaskInput.value = ''
                }
            }
    addTaskButton.addEventListener('click', addTaskWhenClickBtn);
    };



function easyExport(){
    openLists();
    assignButtons();
    addTaskToList();
}


export {listArray, btnArray, listArrayCurrent, taskDisplayArray, listArrayCurrentName, 
        currentCrossTaskButtonsArray, deleteTaskButtonsArray}

export {openLists, easyExport,assignButtons, pinList} 