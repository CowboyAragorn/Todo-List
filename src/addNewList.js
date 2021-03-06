
import closePopups from "./closePopups";
import { takeEverythingOffInfoBoard, displayTaskDetails, displayFlagFalseForDeletingLists } from "./displayTaskDetails";
import { listArray, assignButtons, btnArray, pinList, listArrayCurrent } from "./menuDisplay";
import {storeButtons, storelistArray} from "./storage";

//Controls the function of the addListPopout. Also controls the addList button on side menu
export default function addNewList() {
    let removerArray = []


    //This function creates & pins the new lsit buttons on the lefthand menu//
    function createNewButtons() {
        let addListPopoutBox = document.getElementById('addListPopoutBox');
        let taskPopoutBox = document.getElementById('taskPopoutBox')
        let taskInfoPopoutBox = document.getElementById('taskInfoPopoutBox')
        //unappend the popup//
        //const listFlexContainers = document.getElementsByClassName('listFlexContainer')
        const elements = document.getElementsByClassName('listFlexContainer');

        while (removerArray.length > 0) {
            for(let p=0; p<removerArray.length;p++){
                removerArray[p].removeChild(removerArray[p].firstChild);
                removerArray[p].removeChild(removerArray[p].firstChild);
            }
            removerArray = [];
        }
        while (elements.length > 0) {
            currentListsFlexContainer.removeChild(elements[0]);
        }
        
        //for the list menu buttons on left side//
        for (let i = 0; i < btnArray.length; i++) {
            btnArray[i].classList.add('btn', 'listBtn');
            btnArray[i].id = i;
            let currentListsFlexContainer = document.getElementById('currentListsFlexContainer')
            let listFlexContainer = document.createElement('div'); //Created so that x button for lists can be styled//
                listFlexContainer.classList.add('listFlexContainer');
                removerArray.push(listFlexContainer)
            let editListBtn = document.createElement('button');
                editListBtn.id = i+'e';
                editListBtn.innerHTML = '&#9881'
            editListBtn.classList.add('editListBtn', 'btn');
            listFlexContainer.append(btnArray[i]);
            listFlexContainer.append(editListBtn);
            currentListsFlexContainer.append(listFlexContainer);

            //Event listener for the listEdit buttons, iterating off of i so as to save the correct btnArray.innerHTML
            editListBtn.addEventListener('click', () => {
                //lazyHiddenDiv empty//
                const elements2 = document.getElementsByClassName('popoutItem2');
                while (elements2.length > 0) {
                    addListPopoutBox.removeChild(elements2[0]);
        }
                    addListPopoutBoxContainer.style.display = 'block'; //this is now just the main popout;
                    addListNameDisplay.innerHTML = 'Name List';
                    //define these here so they can always be accessed, even when editing the popup elsewhere//
                    let userListInput = document.createElement('input');
                        userListInput.type = 'text';
                        userListInput.id = 'userListInput';
                        userListInput.maxLength = 18;
                        userListInput.value = btnArray[i].innerHTML;
                        userListInput.classList.add('popoutItem');
                    let editListBtnContainer = document.createElement('div');
                        editListBtnContainer.id = 'editListBtnContainer';
                        editListBtnContainer.classList.add('editListBtnContainer');
                    let deleteListBtnFlexContainer = document.createElement('div');
                        deleteListBtnFlexContainer.id = 'deleteListBtnFlexContainer';
                    let deleteListBtn = document.createElement('button');
                        deleteListBtn.id = 'deleteListBtn';
                        deleteListBtn.classList.add('btn', 'deleteListBtn');
                        deleteListBtn.innerHTML = 'Delete';
                    
                        //adds event listeners to the delete button in the popup, buts it out of btn and list array and resets everything//
                deleteListBtn.addEventListener('click', () => {
                            addListPopoutBoxContainer.style.display = 'none';
                            taskPopoutBox.style.display = 'none';
                            taskInfoPopoutBox.style.display = 'none';
                            btnArray.splice(i, 1);
                                storeButtons();
                                console.log(btnArray)
                            listArray.splice(i, 1);
                                storelistArray();
                                console.log(listArray)
                            //displayFlagFalseForDeletingLists(); //change the display flag to avoid an error if nothing is currently displayed//
                            takeEverythingOffInfoBoard();
                            createNewButtons();
                            closePopups();
                            removeDeleteAndSave();
                        })
                    let saveEditedListBtnFlexContainer = document.createElement('div');
                        saveEditedListBtnFlexContainer.id = ('saveEditedListBtnFlexContainer')
                    let saveEditedListBtn = document.createElement('button');
                        saveEditedListBtn.id = 'saveEditedListBtn';
                        saveEditedListBtn.classList.add('btn', 'saveEditedListBtn');
                        saveEditedListBtn.innerHTML = 'Save';
                   
                //allows you to change the name of the list//
                saveEditedListBtn.addEventListener('click', () => {
                        let userListInputValue = userListInput.value
                        if(userListInputValue.trim().length === 0){
                            userListInput.value = '';
                            return
                        }
                        else{
                        btnArray[i].innerHTML = userListInputValue;
                        addListPopoutBoxContainer.style.display = 'none';
                        storeButtons();
                        createNewButtons();
                        
                        btnArray[i].click(); //Calls the clicked button to display it.
                        removeDeleteAndSave();
                        }
                    })
                    //Enter button defaults to saving new name
                    
                    //Remove old delete & save buttons
                    removeDeleteAndSave();
                    //Delete the text input container
                    const elements = document.getElementsByClassName('popoutItem');
                    while (elements.length > 0) {
                        addListInputContainer.removeChild(elements[0]);
                    }

                    //Add the addList materials//
                    addListPopoutBox.append(editListBtnContainer);
                    editListBtnContainer.append(deleteListBtnFlexContainer);
                    deleteListBtnFlexContainer.append(deleteListBtn)
                    editListBtnContainer.append(saveEditedListBtnFlexContainer)
                    saveEditedListBtnFlexContainer.append(saveEditedListBtn)
                    addListInputContainer.append(userListInput);

                    userListInput.focus(); //auto places cursor in input
                    //Allows user to edit text field and hit enter
                    userListInput.addEventListener('keypress', function(e){
                        if (e.key === 'Enter'){
                            let saveEditedListBtn = document.getElementById('saveEditedListBtn');
                            saveEditedListBtn.click();
                            return
                        }
                    })
                })
        }
        assignButtons();
    }
    
    //remove redundant delete and save buttons
    function removeDeleteAndSave() {
        const elements2 = document.getElementsByClassName('editListBtnContainer');
        while (elements2.length > 0) {
            addListPopoutBox.removeChild(elements2[0]);
        }
    }




    let userListInput
    let userListInputValue
    let userListNewBtn
    //This function alters the btnArray, adding the new input into that array and generating it again//
    function clickBtnAddToBtnArray() {
        userListInput = document.getElementById('userListInput');
        userListInputValue = userListInput.value
        //If statement catches edge case of not having a value or only putting in spaces//
        if (userListInputValue.trim().length === 0) {
            userListInputValue = ''
            return
        }
        //creates new button and puts it in the button array//
        let userListNewBtn = document.createElement('button');
        userListNewBtn.innerHTML = userListInputValue;
        btnArray.push(userListNewBtn);
        //if the string is too long, shorten it and add to list//
        //btns should have been objects//
        createNewButtons();
        //assignButtons();

        //puts it in the list array
       
        let userListNewArray = [];
        userListNewArray.innerHTML = userListInputValue;
        listArray.push(userListNewArray);
        userListInput.value = '';
        addListPopoutBoxContainer.style.display = 'none';
        userListNewBtn.click(); //Clicks the new button, opening the new list//
        storeButtons(); //saves the new button
        //assignButtons();
    }

    //ADD LISTS BUTTON EVENT LISTENER POPUP
    //Event listener to the menu button adding lists, makes sure everything populates in 
    //popup, then calls above function
    addListBtn.addEventListener('click', () => {
        addListPopoutBoxContainer.style.display = 'block'; //this is now just the main popout;
        addListNameDisplay.innerHTML = 'Name New List';
        //define these here so they can always be accessed, even when editing the popup elsewhere//
       
        let userListInput = document.createElement('input');
            userListInput.type = 'text';
            userListInput.id = 'userListInput';
            userListInput.maxLength = 18;
            userListInput.classList.add('popoutItem');
            userListInput.classList.add('addNewListInput');
        let addListPopupBtn = document.createElement('button');
            addListPopupBtn.id = 'addListPopupBtn';
            addListPopupBtn.classList.add('btn', 'popoutItem');
            addListPopupBtn.innerHTML = '+';
        //hiddenDiv is here for CSS, laziness on my part to reuse the popup made it difficult to style.//
        let hiddenDiv = document.createElement('div');
            hiddenDiv.id = 'hiddenDiv';
            hiddenDiv.classList.add('popoutItem2');

        //Empty the popup
        const elements = document.getElementsByClassName('popoutItem');
        while (elements.length > 0) {
            addListInputContainer.removeChild(elements[0]);
        }
        //lazyHiddenDiv empty//
        const elements2 = document.getElementsByClassName('popoutItem2');
        while (elements2.length > 0) {
            addListPopoutBox.removeChild(elements2[0]);
        }
        //Add the addList materials//
        addListInputContainer.append(userListInput);
        addListInputContainer.append(addListPopupBtn);
        addListPopoutBox.append(hiddenDiv);
        userListInput.focus(); //auto places cursor in box//
        addListPopupBtn.addEventListener('click', clickBtnAddToBtnArray); //calls the above function to make sure that lists get appended//
        //add enter key support
        userListInput.addEventListener('keypress', function(e){
            if (e.key === 'Enter'){
                addListPopupBtn.click();
            }
        })
    })


    createNewButtons(); //called at end of function to auto generate buttons for hardcoded lists
}

