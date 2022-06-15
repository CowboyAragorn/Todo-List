import addTask from "./addTask";
import { listArray, assignButtons, btnArray } from "./menuDisplay";


export default function addNewList (){

    function createNewButtons(){
        const elements = document.getElementsByClassName('listBtn');
        while(elements.length > 0){
            currentListsFlexContainer.removeChild(elements[0]);
        }
        for(let i=0; i<btnArray.length;i++){
            btnArray[i].classList.add('btn', 'listBtn');
            btnArray[i].id = i;
            let currentListsFlexContainer = document.getElementById('currentListsFlexContainer')
            currentListsFlexContainer.append(btnArray[i]);
        }

    }

    let addListPopupBtn = document.getElementById('addListPopupBtn');
            
            //would this be cleaner just put into to event listener rather than calling function at end?//
    function clickBtnAddToBtnArray (){
        let userListInput = document.getElementById('userListInput');
        let userListInputValue = userListInput.value
        //If statement catches edge case of not having a value or only putting in spaces//
            if(userListInputValue.trim().length === 0){
                userListInputValue = ''
                return
            }
        let userListNewBtn = document.createElement('button');
        userListNewBtn.innerHTML = userListInputValue;
        btnArray.push(userListNewBtn);
        createNewButtons();
        console.log(btnArray)
        assignButtons();


        console.log(btnArray);
        let userListNewArray = [];
        userListNewArray.innerHTML = userListInputValue;
        listArray.push(userListInputValue);
        userListInput.value = '';
        addListPopoutBoxContainer.style.display = 'none';   

            }
            addListPopupBtn.addEventListener('click', clickBtnAddToBtnArray);
} 

