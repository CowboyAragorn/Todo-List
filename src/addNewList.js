
import { listArray, assignButtons, btnArray } from "./menuDisplay";

//Controls the function of the addListPopout. Also controls the addList button on side menu
export default function addNewList (){
    //This function creates & pins the new lsit buttons on the lefthand menu//
    function createNewButtons(){
        let addListPopoutBox = document.getElementById('addListPopoutBox')
        const elements = document.getElementsByClassName('listFlexContainer');
       //unappend the popup//
        while(elements.length > 0){
            currentListsFlexContainer.removeChild(elements[0]);
        }
        //for the list menu buttons on left side//
        for(let i=0; i<btnArray.length;i++){
            btnArray[i].classList.add('btn', 'listBtn');
            btnArray[i].id = i;
            let currentListsFlexContainer = document.getElementById('currentListsFlexContainer')
            let listFlexContainer = document.createElement('div'); //Created so that x button for lists can be styled//
                listFlexContainer.classList.add('listFlexContainer');
            let editListBtn = document.createElement('button');
                editListBtn.classList.add('editListBtn', 'btn');
            listFlexContainer.append(btnArray[i]);
            listFlexContainer.append(editListBtn);
            currentListsFlexContainer.append(listFlexContainer);
              
        //Event listener for the listedit buttons, iterating off of i so as to save the correct btnArray.innerHTML
            editListBtn.addEventListener('click', ()=>{
                addListPopoutBoxContainer.style.display = 'block'; //this is now just the main popout;
                addListNameDisplay.innerHTML = 'Name List';
                //define these here so they can always be accessed, even when editing the popup elsewhere//
                let userListInput = document.createElement('input');
                    userListInput.type = 'text';
                    userListInput.id = 'userListInput';
                    userListInput.value = btnArray[i].innerHTML
                    userListInput.classList.add('popoutItem')

                let editListBtnContainer = document.createElement('div');
                    editListBtnContainer.id = 'editListBtnContainer';
                    editListBtnContainer.classList.add('editListBtnContainer');
                    let deleteListBtnFlexContainer = document.createElement('div');
                        deleteListBtnFlexContainer.id = 'deleteListBtnFlexContainer';
                        //deleteListBtnFlexContainer.classList.add('editListBtnContainer')
                        let deleteListBtn = document.createElement('button');
                            deleteListBtn.id = 'deleteListBtn';
                            deleteListBtn.classList.add('btn','deleteListBtn');
                            deleteListBtn.innerHTML = 'Delete'
                    let saveEditedListBtnFlexContainer = document.createElement('div');
                        saveEditedListBtnFlexContainer.id = ('saveEditedListBtnFlexContainer')      
                        //saveEditedListBtnFlexContainer.classList.add('editListBtnContainer')
                        let saveEditedListBtn = document.createElement('button');
                            saveEditedListBtn.id = 'saveEditedListBtn';
                            saveEditedListBtn.classList.add('btn', 'saveEditedListBtn');
                            saveEditedListBtn.innerHTML = 'Save';

                    const elements2 = document.getElementsByClassName('editListBtnContainer');
                        while(elements2.length > 0){ 
                            addListPopoutBox.removeChild(elements2[0]);
                        }
            //Delete the text input container
            const elements = document.getElementsByClassName('popoutItem');
            while(elements.length > 0){ 
                addListInputContainer.removeChild(elements[0]);
            }
            //Add the addList materials//
            addListPopoutBox.append(editListBtnContainer);
                editListBtnContainer.append(deleteListBtnFlexContainer);
                    deleteListBtnFlexContainer.append(deleteListBtn)
                editListBtnContainer.append(saveEditedListBtnFlexContainer)
                    saveEditedListBtnFlexContainer.append(saveEditedListBtn)
            addListInputContainer.append(userListInput);
            //addListInputContainer.append(saveEditedListBtn);
        })
        }
     }    
    //This function alters the btnArray, adding the new input into that array and generating it again//
    function clickBtnAddToBtnArray (){
        let userListInput = document.getElementById('userListInput');
        let userListInputValue = userListInput.value
        //If statement catches edge case of not having a value or only putting in spaces//
            if(userListInputValue.trim().length === 0){
                userListInputValue = ''
                return
            }
        //creates new button and puts it in the button array//
        let userListNewBtn = document.createElement('button');
            userListNewBtn.innerHTML = userListInputValue;
            btnArray.push(userListNewBtn);
            createNewButtons();
        console.log(btnArray)
        assignButtons();

        //puts it in the list array
        console.log(btnArray);
            let userListNewArray = [];
            userListNewArray.innerHTML = userListInputValue;
            listArray.push(userListNewArray);
            userListInput.value = '';
        addListPopoutBoxContainer.style.display = 'none';   

    }

    //ADD LISTS BUTTON EVENT LISTENER POPUP
    //Event listener to the menu button adding lists, makes sure everything populates in 
    //popup, then calls above function
    addListBtn.addEventListener('click', () =>{
        addListPopoutBoxContainer.style.display = 'block'; //this is now just the main popout;
        addListNameDisplay.innerHTML = 'Name This List';
        //define these here so they can always be accessed, even when editing the popup elsewhere//
        let userListInput = document.createElement('input');
            userListInput.type = 'text';
            userListInput.id = 'userListInput';
            userListInput.classList.add('popoutItem')
        let addListPopupBtn = document.createElement('button');
            addListPopupBtn.id = 'addListPopupBtn';
            addListPopupBtn.classList.add('btn','popoutItem');
            addListPopupBtn.innerHTML = '+';

        //Empty the popup
        const elements = document.getElementsByClassName('popoutItem');
        while(elements.length > 0){ 
            addListInputContainer.removeChild(elements[0]);
        }
        //Add the addList materials//
        addListInputContainer.append(userListInput);
        addListInputContainer.append(addListPopupBtn);
        addListPopupBtn.addEventListener('click', clickBtnAddToBtnArray); //calls the above function to make sure that lists get appended//
    
    
    
    })
    

    createNewButtons(); //called at end of function to auto generate buttons for hardcoded lists
} 

