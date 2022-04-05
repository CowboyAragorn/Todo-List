import './menuBar.css'

export default function openLists (){

    function addTask(title, description, dueDate, priority){
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }

    //let groceryList = document.getElementbyId('0');


    const groceryTask1 = new addTask(
        'Grocery List 1',
        'List for Week 4/4',
        '4/10',
        'High'
    )

    let groceryListArray = [groceryTask1,]

    console.log(groceryListArray)

    let grocerybtn = document.getElementById('0');
    grocerybtn.addEventListener('click', () =>{
        let listDisplayBox = document.getElementById('listDisplayBox');
        listDisplayBox.style.display = 'flex';
        
    })





    let listArray = [groceryListArray,]


    console.log(listArray)
}
