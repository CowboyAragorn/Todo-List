import addTask from './addTask'

//declare listArray here for export later
let listArray = [];
let listArrayCurrent;
//This function controls the display of lists on the popup when clicked from the menu//
function openLists (){

//This prototype is being called to display the categories from the lists//
    addTask.prototype.displayList = function(){
        let taskDisplayElement = document.createElement('p');
            taskDisplayElement.innerHTML = this.taskName;
            taskDisplayElement.classList = 'task';
            console.log(taskDisplayElement)
        let taskDisplayContainer = document.getElementById('taskDisplayContainer')
        taskDisplayContainer.append(taskDisplayElement)
    }
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
    let btnArray = [groceryBtn, houseBtn,] 

    listArray = [groceryListArray, houseListArray,]
    listArray.id = 'listArray';
    console.log(listArray)
//Purpose of loop here is to append tasks to the task screen when clicking on a list. This will allow a user to see their tasks, and to visually switch
//between lists//
    //popoutBox.style.display = 'none'; //Defaults popup to invisible before a list is clicked
    let taskDisplayContainerSignal = false;
//separate pin list as a separate function so it can be used to add new tasks to list//
//pin list used to be part of for loop below//
function pinList(){
        const elements = document.getElementsByClassName('task');
        while(elements.length > 0){
            taskDisplayContainer.removeChild(elements[0]);
            taskDisplayContainerSignal = false;
        }

        for(let p = 0; p < listArrayCurrent.length; p++){ //FOR the length of the currently selected item in the Array, display each listed item//
            console.log(listArrayCurrent);
            listArrayCurrent[p].displayList();
            taskDisplayContainerSignal = true;
        } 
}
//for loop here assigns event listener that displays information from storage arrays//
for(let i=0; i < btnArray.length;i++){ //Goes through each item in button array and assigns said event listener
    btnArray[i].addEventListener('click', () =>{
        let popoutBox = document.getElementById('popoutBox');
        popoutBox.style.display = 'block'; //makes the popout list box appear when clicking the list button on side menu
        let listNameDisplay = document.getElementById('listNameDisplay');
            listNameDisplay.innerHTML = btnArray[i].innerHTML;
            //next line is so important, accidental genius mode. It is operating off of listArray[i] key being i and not i2, which means it selects the number in the listArray equivalent with the position in the buttonArray, allowing selection of the correct list//
            //console.log(listArray[i2])
            //OK, so the button array cycles through at the start of the function and assigns the i value to begin with, this is how it knows how to select the correct item in the array. This is PRE-DONE at beginning of function.
             listArrayCurrent = listArray[i];    //sets variable to be used so in nested loop so that nested loop doesn't move through to different part of the array through accidental incrementing//

    //If statement here checks to see if there are currently any tasks displayed. If there are, it unappends them prior to appending new list//
        if(taskDisplayContainerSignal = true){

          pinList();
    }
})
}



    function addTaskToList () {

        let addTaskButton = document.getElementById('addTaskBtn');

        function addTaskWhenClickBtn (){
            let userTaskInput = document.getElementById('userTaskInput');
            let userTaskInputValue = userTaskInput.value;
            let userAddTask = new addTask(
                userTaskInputValue,
                'List for Week 4/4',
                '4/10',
                'High'
            )
            listArrayCurrent.push(userAddTask);
            pinList();
            console.log(listArrayCurrent);
        }
        addTaskButton.addEventListener('click', addTaskWhenClickBtn);
    }
    addTaskToList();


//x makes the popup invisible again. Probably need to reset it, do so later//
let closePopupButton = document.getElementById('listExitBtn');
closePopupButton.addEventListener('click', () =>{
     popoutBox.style.display = 'none'; //Erasing popup display from sight until clicking a list//
})

}

export {listArray, listArrayCurrent, openLists}