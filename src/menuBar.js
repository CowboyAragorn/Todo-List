import './menuBar.css'

export default function openLists (){

    function addTask(taskName, description, dueDate, priority){
        this.taskName = taskName
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }


//This prototype is being called to display the lists//
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
    
    let houseListArray = [laundry, laundry2, laundry3, laundry4, laundry5 ];
        houseListArray.innerHTML = 'Housework List';

    console.log(groceryListArray)




    let groceryBtn = document.getElementById('0');
    let houseBtn = document.getElementById('1');
    let btnArray = [groceryBtn, houseBtn,] 

    let listArray = [groceryListArray, houseListArray,]
    console.log(listArray)



//Purpose of loop here is to append tasks to the task screen when clicking on a list. This will allow a user to see their tasks, and to visually switch
//between lists//


    let taskDisplayContainerSignal = false;

//for loop here assigns event listener that displays information from storage arrays//
for(let i=0; i < btnArray.length;i++){ //Goes through each item in button array and assigns said event listener
    btnArray[i].addEventListener('click', () =>{
        let listDisplayBox = document.getElementById('listDisplayBox');
        //listDisplayBox.style.display = 'block';
        let listNameDisplay = document.getElementById('listNameDisplay');
            listNameDisplay.innerHTML = btnArray[i].innerHTML;
            //next line is so important, accidental genius mode. It is operating off of listArray[i] key being i and not i2, which means it selects the number in the listArray equivalent with the position in the buttonArray, allowing selection of the correct list//
            //console.log(listArray[i2])
            //OK, so the button array cycles through at the start of the function and assigns the i value to begin with, this is how it knows how to select the correct item in the array. This is PRE-DONE at beginning of function.
            let listArrayCurrent = listArray[i];    //sets variable to be used so in nested loop so that nested loop doesn't move through to different part of the array through accidental incrementing//


    //If statement here checks to see if there are currently any tasks displayed. If there are, it unappends them prior to appending new list//
        if(taskDisplayContainerSignal = true){
                const elements = document.getElementsByClassName('task');
                while(elements.length > 0){
                    taskDisplayContainer.removeChild(elements[0]);
                    taskDisplayContainerSignal = false;
                }
        }

            for(let p = 0; p < listArrayCurrent.length; p++){ //FOR the length of the currently selected item in the Array, display each listed item//
                console.log(listArrayCurrent);
                listArrayCurrent[p].displayList();
                taskDisplayContainerSignal = true;
            } 
    })
}



}
