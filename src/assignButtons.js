import { pinList, assignFormerPositions, btnArray, listArrayCurrent, listArray } from "./menuDisplay";

//listArrays directly so that it doesn't reset when hitting the list button
//for loop here assigns event listener to menu list buttons to display task information from storage arrays - IIFE//
export default function assignButtons(){
    for(let i=0; i < btnArray.length;i++){ //Goes through each item in button array and assigns said event listener
        btnArray[i].addEventListener('click', () =>{
            let taskPopoutBox = document.getElementById('taskPopoutBox');
            let taskInfoPopoutBox = document.getElementById('taskInfoPopoutBox')
            console.log('listArrayCurrentAssignBtn')
            console.log(listArrayCurrent)
                //selects the number in the listArray equivalent with the position in the buttonArray, allowing selection of the correct list//
                //Button array cycles through at start of function & assigns the i valueto select the correct item in the array. This is PRE-DONE at beginning of function.
                listArrayCurrent = listArray[i];    //sets variable to be used so in nested loop so that nested loop doesn't move through to different part of the array through accidental incrementing//
                taskPopoutBox.style.display = 'flex'; //makes the popout list box appear when clicking the list button on side menu
                let listNameDisplay = document.getElementById('listNameDisplay');
                    listNameDisplay.innerHTML = btnArray[i].innerHTML;
                if(listArrayCurrent.length > 0){ //determines if the details screen shows up. Won't show if no tasks to display details for//
                    taskInfoPopoutBox.style.display = 'flex';
                }
                else if (listArrayCurrent.length <= 0){
                    taskInfoPopoutBox.style.display = 'none';
                
                }
                console.log(listArrayCurrent)
                listArrayCurrentName = listNameDisplay.innerHTML;
                console.log(listArrayCurrentName)
            assignFormerPositions();
            pinList();
    })
    }
};

