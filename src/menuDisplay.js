import addTask from './addTask';
import {deleteTasks, crossedTasks} from './deleteTasks';

//declare listArray here for export later
let listArray = [];
let btnArray = [];
let listArrayCurrent;
let listArrayCurrentName
let currentExitTaskButtonsArray = [];
let taskDisplayArray = [];
let taskExitBtnTracker;
let sortTracker;
let iTracker //itracker here connects directly above to pinLists. Lets me change the original array in
let formerArrayPositionTracker;


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
                    'laundry',
                    'List for Week 4/4',
                    '4/10',
                    'High'
                )
                const laundry2 = new addTask(
                    'laundry2',
                    'List for Week 4/4',
                    '4/10',
                    'High'
                )
                const laundry3 = new addTask(
                    'laundry3',
                    'List for Week 4/4',
                    '4/10',
                    'High'
                )
                const laundry4 = new addTask(
                    'laundry4',
                    'List for Week 4/4',
                    '4/10',
                    'High'
                )
                const laundry5 = new addTask(
                    'laundry5',
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

   //This prototype is being called to display the categories from the lists on to the popup//
   addTask.prototype.displayList = function(){
        let taskFlexContainer = document.createElement('div');
        taskFlexContainer.id = 'taskFlexContainer';
        taskFlexContainer.classList = 'taskFlex'
        taskFlexContainer.classList.add(taskExitBtnTracker);
        let taskDisplayElement = document.createElement('p');
            taskDisplayElement.innerHTML = this.taskName;
            taskDisplayElement.classList = 'task';
            if(this.completeStatus == 'crossed'){ //tracks complete status modified in deleteTasks//
                taskDisplayElement.classList.add('crossed');
            }
        let taskExitBtn = document.createElement('button');
            taskExitBtn.classList.add('taskExitBtn', 'btn');
            currentExitTaskButtonsArray.push(taskExitBtn); //array of buttons for crossing tasks//
        let taskDisplayContainer = document.getElementById('taskDisplayContainer');
        taskDisplayContainer.append(taskFlexContainer);
        taskFlexContainer.append(taskExitBtn);
        taskFlexContainer.append(taskDisplayElement);
 }

//These two prototypes work with pinList to sort the displayed by checked/unchecked
    addTask.prototype.sortUncheckedDisplayArray = function(){
        if(this.completeStatus == undefined || this.completeStatus == 'incomplete'){ //if uncrossed
            taskDisplayArray.push(sortTracker)
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

    addTask.prototype.saveFormerArrayPosition = function(){
        this.formerArrayPosition = formerArrayPositionTracker;
    }



 //pin list and assign buttons are fundmanetally connected because of listArrayCurrent, which is the array within the array//
function pinList(){
    taskDisplayArray = [] //Empty toe taskDisplay array from last run so that it doesn't overflow with old values
    taskExitBtnTracker = 0; //for setting ID
    const elements = document.getElementsByClassName('taskFlex');
    while(elements.length > 0){ //Emptys the visual display for repinning
        taskDisplayContainer.removeChild(elements[0]);
        taskExitBtnTracker = 0;
        currentExitTaskButtonsArray = []; //Need to reset this array so that the i in deleteTasks doesn't continually count. Perhaps a bit too entertwined//
    }

    for(let p = 0; p < listArrayCurrent.length; p++){ //push the current listArray to the taskDisplay array
        console.log(taskDisplayArray);
        sortTracker = listArrayCurrent[p]
        listArrayCurrent[p].sortUncheckedDisplayArray();
    } 
    for(let p = 0; p < listArrayCurrent.length; p++){ //push the current listArray to the taskDisplay array
        sortTracker = listArrayCurrent[p]
        listArrayCurrent[p].sortCheckedDisplayArray();
    } 
    listArrayCurrent = [] //empty listArray for refill at bottom of function

    for(let p = 0; p < crossedTasks.length; p++){ //push crossed tasks array from deleteTasks to display array. This will make them appear at the bottom.
        taskDisplayArray.push(crossedTasks[p])
    }
    for(let p = 0; p < taskDisplayArray.length; p++){  //display the taskDisplayArray
        
        taskDisplayArray[p].displayList();
        taskExitBtnTracker++;
    } 
    console.log('taskDisplayArray')
    console.log(taskDisplayArray)
    deleteTasks(); //run delete tasks to assign event listener to buttons
    //
    for(let p = 0; p < taskDisplayArray.length; p++){//push all the display array to the previously emptied current list array for display if changing lists//
        listArrayCurrent.push(taskDisplayArray[p]) //saves temporary copy for when list is selected
     } 
     console.log(listArrayCurrent)
     listArray[iTracker] = listArrayCurrent; //changes original array
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

    //Assigns former array position for sorting
function assignFormerPositions(){
    for(let p = 0; p < listArrayCurrent.length; p++){ //push the current listArray to the taskDisplay array
        formerArrayPositionTracker = p;
        listArrayCurrent[p].saveFormerArrayPosition();
        taskDisplayArray.push(listArrayCurrent[p])
        console.log(taskDisplayArray);
    } 
    //then dumps
    taskDisplayArray = []
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


export {listArray, btnArray, listArrayCurrent, taskDisplayArray, listArrayCurrentName, currentExitTaskButtonsArray, openLists, easyExport, assignButtons, pinList}