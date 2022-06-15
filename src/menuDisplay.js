import addTask from './addTask';
import {deleteTasks, crossedTasks} from './deleteTasks';

//declare listArray here for export later
let listArray = [];
let btnArray = [];
let listArrayCurrent;
let currentExitTaskArray = [];


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
        let taskExitBtn = document.createElement('button');
            taskExitBtn.classList.add('taskExitBtn', 'btn');
            currentExitTaskArray.push(taskExitBtn);
        let taskDisplayContainer = document.getElementById('taskDisplayContainer');
        taskDisplayContainer.append(taskFlexContainer);
        taskFlexContainer.append(taskExitBtn);
        taskFlexContainer.append(taskDisplayElement);
 }
 let taskExitBtnTracker
 //pin list and assign buttons are fundmanetally connected because of listArrayCurrent, which is the array within the array//
function pinList(){
    taskExitBtnTracker = 0; //for setting ID
    const elements = document.getElementsByClassName('taskFlex');
    while(elements.length > 0){
        taskDisplayContainer.removeChild(elements[0]);
        taskExitBtnTracker = 0;
        currentExitTaskArray = []; //Need to reset this array so that the i in deleteTasks doesn't continually count. Perhaps a bit too entertwined//
    }
    for(let p = 0; p < listArrayCurrent.length; p++){ //FOR the length of the currently selected item in the Array, display each listed item//
        console.log(listArrayCurrent);
        listArrayCurrent[p].displayList();
        taskExitBtnTracker++;
    } 
    deleteTasks();
}


//for loop here assigns event listener to menu list buttons to display task information from storage arrays - IIFE//
function assignButtons(){
    console.log(btnArray)
    for(let i=0; i < btnArray.length;i++){ //Goes through each item in button array and assigns said event listener
        btnArray[i].addEventListener('click', () =>{
            let taskPopoutBox = document.getElementById('taskPopoutBox');
            taskPopoutBox.style.display = 'flex'; //makes the popout list box appear when clicking the list button on side menu
            let listNameDisplay = document.getElementById('listNameDisplay');
                listNameDisplay.innerHTML = btnArray[i].innerHTML;
                //selects the number in the listArray equivalent with the position in the buttonArray, allowing selection of the correct list//
                //Button array cycles through at start of function & assigns the i valueto select the correct item in the array. This is PRE-DONE at beginning of function.
                listArrayCurrent = listArray[i];    //sets variable to be used so in nested loop so that nested loop doesn't move through to different part of the array through accidental incrementing//
    
            pinList();
    })
    }
};


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
                'High'
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


export {listArray, btnArray, listArrayCurrent, currentExitTaskArray, openLists, easyExport, assignButtons, pinList}