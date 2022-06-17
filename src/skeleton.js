import './skeleton.css'

//this function defines the basic layout for the webpage//
export default function skeleton (){
    let base = document.createElement('div');
        base.id = 'base';
    document.body.append(base);


//Left hand menu bar//
    let menuBarContainer = document.createElement('div'); //This is the menu/nav bar on left side of screen
        menuBarContainer.id = 'menuBarContainer';

        let newTodoContainer = document.createElement('div');
            newTodoContainer.id = 'newTodoContainer'
            menuBarContainer.append(newTodoContainer)

            let newTodo = document.createElement('button');
                newTodo.id = 'newTodo';
                newTodo.innerHTML = 'New Task'
                newTodoContainer.append(newTodo);

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
            let groceryList = document.createElement('button');
                groceryList.classList = 'list';
                groceryList.innerHTML = 'Grocery List'
                groceryList.id = '0';
                groceryList.classList.add('btn', 'listBtn')
                currentListsFlexContainer.append(groceryList)

            let houseList = document.createElement('button');
                houseList.classList = 'list';
                houseList.innerHTML = 'Housework List'
                houseList.id = '1';
                houseList.classList.add('btn', 'listBtn')
                currentListsFlexContainer.append(houseList)
            
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
                    listExitBtn.innerHTML = 'x'
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
//info display with titles & boxes hardcoded in, but filled in displayTaskDetails
    let taskInfoDisplayContainer = document.createElement('div');
            taskInfoDisplayContainer.id = 'taskInfoDisplayContainer'
            taskInfoPopoutBox.append(taskInfoDisplayContainer)
        let dueDateDisplayContainer = document.createElement('div');
            dueDateDisplayContainer.id = "dueDateDisplayContainer"
            taskInfoDisplayContainer.append(dueDateDisplayContainer);
                let dueDateTitle = document.createElement('div');
                    dueDateTitle.id = 'dueDateTitle';
                    dueDateTitle.innerHTML = 'Finish by';
                    dueDateDisplayContainer.append(dueDateTitle);
                let dueDateDisplay = document.createElement('div');
                    dueDateDisplay.id = 'dueDateDisplay';
                    dueDateDisplayContainer.append(dueDateDisplay);

        let priorityDisplayContainer = document.createElement('div');
            priorityDisplayContainer.id = "priorityDisplayContainer"
            taskInfoDisplayContainer.append(priorityDisplayContainer);
                let priorityTitle = document.createElement('div');
                    priorityTitle.id = 'priorityTitle';
                    priorityTitle.innerHTML = 'Priority Level';
                    priorityDisplayContainer.append(priorityTitle);
                let priorityDisplay = document.createElement('div');
                    priorityDisplay.id = 'priorityDisplay';
                    priorityDisplayContainer.append(priorityDisplay);
        let descriptionDisplayContainer = document.createElement('div');
            descriptionDisplayContainer.id = "descriptionDisplayContainer"
            taskInfoDisplayContainer.append(descriptionDisplayContainer);
                let descriptionTitle = document.createElement('div');
                    descriptionTitle.id = 'descriptionTitle';
                    descriptionTitle.innerHTML = 'Notes';
                    descriptionDisplayContainer.append(descriptionTitle);
                let descriptionDisplay = document.createElement('div');
                    descriptionDisplay.id = 'descriptionDisplay';
                    descriptionDisplayContainer.append(descriptionDisplay);
            

    

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
                    addListNameDisplay.innerHTML = 'Name This List';
                    addListNameDisplay.classList = 'listHeaders';
                    addListDisplayTaskbar.append(addListNameDisplay);
            let addListExitBtn = document.createElement('button');
                    addListExitBtn.id = 'addListExitBtn';
                    addListExitBtn.classList = 'btn';
                    addListExitBtn.innerHTML = 'x'
                    addListDisplayTaskbar.append(addListExitBtn);
        //addList input box//
        let addListInputContainer = document.createElement('div');
                addListInputContainer.id = 'addListInputContainer';
                addListPopoutBox.append(addListInputContainer)
                let userListInput = document.createElement('input');
                    userListInput.type = 'text';
                    userListInput.id = 'userListInput';
                    addListInputContainer.append(userListInput);
                let addListPopupBtn = document.createElement('button');
                    addListPopupBtn.id = 'addListPopupBtn';
                    addListPopupBtn.classList = 'btn';
                    addListPopupBtn.innerHTML = '+';
                    addListInputContainer.append(addListPopupBtn);
    
    base.append(menuBarContainer);
    base.append(taskAndListContainer);
};