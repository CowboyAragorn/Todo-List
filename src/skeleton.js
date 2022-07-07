import './skeleton.css'

//this function defines the basic layout for the webpage//
export default function skeleton (){
    let base = document.createElement('div');
        base.id = 'base';
    document.body.append(base);


//Left hand menu bar//
    let menuBarContainer = document.createElement('div'); //This is the menu/nav bar on left side of screen
        menuBarContainer.id = 'menuBarContainer';

        let todoListLogoContainer = document.createElement('div');
            todoListLogoContainer.id = 'todoListLogoContainer'
            menuBarContainer.append(todoListLogoContainer)
            /* Add a list from one button
            let newTodo = document.createElement('button');
                newTodo.id = 'newTodo';
                newTodo.innerHTML = 'New Task'
                todoListLogoContainer.append(newTodo);
    

    let todoListLogo = document.createElement('div');
        todoListLogo.id = 'todoListLogo';
        todoListLogo.innerHTML = 'Todo Lists'
        todoListLogoContainer.append(todoListLogo);
*/
        let overallListMenuContainer = document.createElement('div');
            overallListMenuContainer.id = 'overallListMenuContainer';
            menuBarContainer.append(overallListMenuContainer);

            let listHeaderContainer = document.createElement('div');
                listHeaderContainer.id = 'listHeaderContainer';
                overallListMenuContainer.append(listHeaderContainer);
                let currentListsHeader = document.createElement('div');
                    currentListsHeader.classList = 'listHeaders'
                    currentListsHeader.innerHTML = 'Lists'
                    listHeaderContainer.append(currentListsHeader);
                let addListBtn = document.createElement('button');
                    addListBtn.id = 'addListBtn';
                    addListBtn.classList = 'btn';
                    addListBtn.innerHTML = '+';
                    listHeaderContainer.append(addListBtn);

        let currentListsFlexContainer = document.createElement('div');
            currentListsFlexContainer.id = 'currentListsFlexContainer'
            overallListMenuContainer.append(currentListsFlexContainer);
            //hardcoded ListFlexContainers that are replaced after first new list created//
            let listFlexContainer1 = document.createElement('div'); //Created so that x button for lists can be styled//
                listFlexContainer1.classList.add('listFlexContainer');
             let listFlexContainer2 = document.createElement('div'); //Created so that x button for lists can be styled//
                listFlexContainer2.classList.add('listFlexContainer');

                let groceryList = document.createElement('button');
                    groceryList.classList = 'list';
                    groceryList.innerHTML = 'Grocery List'
                    groceryList.id = '0';
                    groceryList.classList.add('btn', 'listBtn')
                    listFlexContainer1.append(groceryList)
                    currentListsFlexContainer.append(listFlexContainer1)

                let houseList = document.createElement('button');
                    houseList.classList = 'list';
                    houseList.innerHTML = 'Housework List'
                    houseList.id = '1';
                    houseList.classList.add('btn', 'listBtn')
                    listFlexContainer2.append(houseList)
                    currentListsFlexContainer.append(listFlexContainer2)
            
//Right hand popup for tasks and interactions includes popout boxes//
    let taskAndListContainer = document.createElement('div');
        taskAndListContainer.id = 'taskAndListContainer';

    //Task popout box//
    let taskPopoutBoxContainer = document.createElement('div');
        taskPopoutBoxContainer.id = 'taskPopoutBoxContainer';
        taskAndListContainer.append(taskPopoutBoxContainer)
        let taskPopoutBox = document.createElement('div');
            taskPopoutBox.id = 'taskPopoutBox';
            taskPopoutBox.classList.add('taskPopoutBox')
            taskPopoutBoxContainer.append(taskPopoutBox);

            let listDisplayTaskbar = document.createElement('div');
                listDisplayTaskbar.id = 'listDisplayTaskbar';
                listDisplayTaskbar.classList = 'listDisplayTaskbar';
                taskPopoutBox.append(listDisplayTaskbar);
                let listNameDisplay = document.createElement('div');
                    listNameDisplay.id = 'listNameDisplay';
                    listNameDisplay.classList = 'listHeaders';
                    listDisplayTaskbar.append(listNameDisplay);
                let listExitBtn = document.createElement('button');
                    listExitBtn.id = 'listExitBtn';
                    listExitBtn.classList.add('btn','listExitBtn');
                    listExitBtn.innerHTML = '&#10006;'
                    listDisplayTaskbar.append(listExitBtn);

            let taskDisplayContainer = document.createElement('div');
                taskDisplayContainer.id = 'taskDisplayContainer'
                taskPopoutBox.append(taskDisplayContainer)

            //where user types new tasks into popup/
            let inputContainer = document.createElement('div');
                inputContainer.id = 'inputContainer';
                taskPopoutBox.append(inputContainer)
                let userTaskInput = document.createElement('input');
                    userTaskInput.type = 'text';
                    userTaskInput.id = 'userTaskInput';
                    inputContainer.append(userTaskInput);
                let addTaskBtn = document.createElement('button');
                    addTaskBtn.id = 'addTaskBtn';
                    addTaskBtn.classList = 'btn';
                    addTaskBtn.innerHTML = '+';
                    inputContainer.append(addTaskBtn);


//Task info right next to task popout box//
let taskInfoPopoutContainer = document.createElement('div');
    taskInfoPopoutContainer.id = 'taskInfoPopoutContainer';
    taskAndListContainer.append(taskInfoPopoutContainer)
let taskInfoPopoutBox = document.createElement('div');
    taskInfoPopoutBox.id = 'taskInfoPopoutBox';
    taskInfoPopoutBox.classList.add('taskPopoutBox')
    taskInfoPopoutContainer.append(taskInfoPopoutBox);
//title display
    let taskTitleDisplayBox = document.createElement('div');
        taskTitleDisplayBox.id = 'taskTitleDisplayBox';
        taskTitleDisplayBox.classList = 'listHeaders';
        taskInfoPopoutBox.append(taskTitleDisplayBox);
        let taskTitleDisplay = document.createElement('div');
            taskTitleDisplay.id = 'taskTitleDisplay';
            taskTitleDisplay.classList = 'listHeaders';
            taskTitleDisplayBox.append(taskTitleDisplay);

    //addList popout box - created so that it disallows clicking outside the box//
    let addListPopoutBoxContainer = document.createElement('div');
        addListPopoutBoxContainer.id = 'addListPopoutBoxContainer';
        addListPopoutBoxContainer.style.display = 'none';
        taskAndListContainer.append(addListPopoutBoxContainer)
    let addListPopoutBoxFlexContainer = document.createElement('div');
        addListPopoutBoxFlexContainer.id = 'addListPopoutBoxFlexContainer';
        addListPopoutBoxContainer.append(addListPopoutBoxFlexContainer);
    let addListPopoutBox = document.createElement('div');
            addListPopoutBox.id = 'addListPopoutBox';
            addListPopoutBoxFlexContainer.append(addListPopoutBox);

        let addListDisplayTaskbar = document.createElement('div');
                addListDisplayTaskbar.id = 'addListDisplayTaskbar';
                addListDisplayTaskbar.classList = 'listDisplayTaskbar';
                addListPopoutBox.append(addListDisplayTaskbar);
            let addListNameDisplay = document.createElement('div');
                    addListNameDisplay.id = 'addListNameDisplay';
                    addListNameDisplay.classList.add('listHeaders');
                    addListDisplayTaskbar.append(addListNameDisplay);
            let addListExitBtn = document.createElement('button');
                    addListExitBtn.id = 'addListExitBtn';
                    addListExitBtn.classList = 'btn';
                    addListExitBtn.innerHTML = '&#10006;'
                    addListDisplayTaskbar.append(addListExitBtn);
        //addList input box//
        let addListInputContainer = document.createElement('div');
                addListInputContainer.id = 'addListInputContainer';
                addListPopoutBox.append(addListInputContainer)
        
    base.append(menuBarContainer);
    base.append(taskAndListContainer);
};