import './menuBar.css'

export default function openLists (){

    function addTask(taskName, description, dueDate, priority){
        this.taskName = taskName
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }

    //let groceryList = document.getElementbyId('0');


    const mondayGrocery = new addTask(
        'Oranges',
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

    addTask.prototype.displayList = function(){
        let taskDisplayElement = document.createElement('p');
            taskDisplayElement.innerHTML = this.taskName;
            console.log(taskDisplayElement)
        let taskDisplayContainer = document.getElementById('taskDisplayContainer')
        taskDisplayContainer.append(taskDisplayElement)



    }


    let groceryListArray = [mondayGrocery, fridayGrocery,];
        groceryListArray.innerHTML = 'Grocery List';






    console.log(groceryListArray)


    let listArray = [groceryListArray,]


    console.log(listArray)

    let grocerybtn = document.getElementById('0');
    grocerybtn.addEventListener('click', () =>{
        let listDisplayBox = document.getElementById('listDisplayBox');
        //listDisplayBox.style.display = 'block';
        let listNameDisplay = document.getElementById('listNameDisplay')
            listNameDisplay.innerHTML = groceryListArray.innerHTML
        let taskDisplayContainer = document.getElementById('taskDisplayContainer');

        for(let i = 0; i < groceryListArray.length; i++){
            groceryListArray[i].displayList()
        }
        
    })



}
