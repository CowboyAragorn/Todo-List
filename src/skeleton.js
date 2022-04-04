import './skeleton.css'

export default function skeleton (){
    let base = document.createElement('div');
        base.id = 'base';
    document.body.append(base);

    let menuBarContainer = document.createElement('div');
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
                listContainer.append(groceryList)
            






    let taskContainer = document.createElement('div');
        taskContainer.id = 'taskContainer';
    
    base.append(menuBarContainer);
    base.append(taskContainer);
};