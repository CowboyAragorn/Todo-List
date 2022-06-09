import './skeleton.css'

export default function skeleton (){
    let base = document.createElement('div');
        base.id = 'base';
    document.body.append(base);

    let menuBarContainer = document.createElement('div'); //This is the menu/nav bar on left side of screen
        menuBarContainer.id = 'menuBarContainer';

        let newTodoContainer = document.createElement('div');
            newTodoContainer.id = 'newTodoContainer'
            menuBarContainer.append(newTodoContainer)

            let newTodo = document.createElement('button');
                newTodo.id = 'newTodo';
                newTodo.innerHTML = 'New Task'
                newTodoContainer.append(newTodo);

        let listContainer = document.createElement('div');
            listContainer.id = 'listContainer';
            menuBarContainer.append(listContainer);

            let listHeaderContainer = document.createElement('div');
                listHeaderContainer.id = 'listHeaderContainer';
                listContainer.append(listHeaderContainer);
                let currentListsHeader = document.createElement('div');
                    currentListsHeader.classList = 'listHeaders'
                    currentListsHeader.innerHTML = 'Lists'
                    listHeaderContainer.append(currentListsHeader);
                let addListBtn = document.createElement('button');
                    addListBtn.id = 'addListBtn';
                    addListBtn.innerHTML = '+';
                    listHeaderContainer.append(addListBtn);

                
            let groceryList = document.createElement('button');
                groceryList.classList = 'list';
                groceryList.innerHTML = 'Grocery List'
                groceryList.id = '0';
                listContainer.append(groceryList)

            let houseList = document.createElement('button');
                houseList.classList = 'list';
                houseList.innerHTML = 'Housework List'
                houseList.id = '1';
                listContainer.append(houseList)
            
            






    let popoutListBox = document.createElement('div');
        popoutListBox.id = 'popoutListBox';
        let listDisplayBox = document.createElement('div');
            listDisplayBox.id = 'listDisplayBox';
            popoutListBox.append(listDisplayBox);

            let listDisplayTaskbar = document.createElement('div');
                listDisplayTaskbar.id = 'listDisplayTaskbar';
                listDisplayBox.append(listDisplayTaskbar);
            let listNameDisplay = document.createElement('div');
                listNameDisplay.id = 'listNameDisplay';
                listNameDisplay.classList = 'listHeaders';
                //listNameDisplay.innerHTML = 'Grocery List'; //testing
                listDisplayTaskbar.append(listNameDisplay);
            let listExitBtn = document.createElement('button');
                listExitBtn.id = 'listExitBtn';
                listExitBtn.innerHTML = 'x'
                listDisplayTaskbar.append(listExitBtn);

            let taskDisplayContainer = document.createElement('div');
                taskDisplayContainer.id = 'taskDisplayContainer'
                listDisplayBox.append(taskDisplayContainer)

    
    base.append(menuBarContainer);
    base.append(popoutListBox);
};