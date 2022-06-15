import addTask from "./addTask";
import { listArray, openLists } from "./menuDisplay";
import { btnArray } from "./menuDisplay";


export default function addNewList (){

    function createNewButtons(){
        const elements = document.getElementsByClassName('listBtn');
        while(elements.length > 0){
            currentListsFlexContainer.removeChild(elements[0]);
        }
        for(let i=0; i<btnArray.length;i++){
            let listBtnDisplayElement = document.createElement('button');
            listBtnDisplayElement.innerHTML = btnArray[i].innerHTML;
            listBtnDisplayElement.classList.add('btn', 'listBtn');
            listBtnDisplayElement.id = i;
            let currentListsFlexContainer = document.getElementById('currentListsFlexContainer')
            currentListsFlexContainer.append(listBtnDisplayElement);
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
                let userListNewArray = [];
                userListNewArray.innerHTML = userListInputValue;
                btnArray.push(userListNewArray);
                createNewButtons();
                console.log(btnArray);
                listArray.push(userListInputValue);
                userListInput.value = '';
                
                        
                  }
                  addListPopupBtn.addEventListener('click', clickBtnAddToBtnArray);
    } 

