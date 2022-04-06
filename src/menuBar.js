import './menuBar.css'

export default function openLists (){

    function addTask(taskName, description, dueDate, priority){
        this.taskName = taskName
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }


    addTask.prototype.displayList = function(){
        let taskDisplayElement = document.createElement('p');
            taskDisplayElement.innerHTML = this.taskName;
            console.log(taskDisplayElement)
        let taskDisplayContainer = document.getElementById('taskDisplayContainer')
        taskDisplayContainer.append(taskDisplayElement)



    }


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

    
    let houseListArray = [laundry, ];
        houseListArray.innerHTML = 'Housework List';

    console.log(groceryListArray)




    let groceryBtn = document.getElementById('0');
    let houseBtn = document.getElementById('1');
    let btnArray = [groceryBtn, houseBtn,] 

    let listArray = [groceryListArray, houseListArray,]
    console.log(listArray)



//for loop here assignes event listener that displays information from storage arrays//
for(let i=0; i < btnArray.length;i++){ //Goes through each item in button array and assigns said event listener
    btnArray[i].addEventListener('click', () =>{
        let listDisplayBox = document.getElementById('listDisplayBox');
        //listDisplayBox.style.display = 'block';
        let listNameDisplay = document.getElementById('listNameDisplay');
            listNameDisplay.innerHTML = btnArray[i].innerHTML;

        for (let i2 = 0; i2 < listArray[i2].length; i2++){ //FOR the length of THIS ITEM in the list array//
            //next line is so important, accidental genius mode. It is operating off of listArray[i] key being i and not i2, which means it selects the number in the listArray equivalent with the position in the buttonArray, allowing selection of the correct list//
            console.log(listArray[i2])
            let listArrayCurrent = listArray[i];    //sets variable to be used so in nested loop so that nested loop doesn't move through to different part of the array through accidental incrementing//
            for(let p = 0; p < listArrayCurrent.length; p++){ //FOR the length of the currently selected item in the Array, display each listed item//
                console.log(listArrayCurrent);
                listArrayCurrent[p].displayList();
            } 
        }
        
    })
}



}
