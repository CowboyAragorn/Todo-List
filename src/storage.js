import { parse } from "date-fns";
import addTask from "./addTask";
import { listArray, btnArray, listArrayCurrent } from "./menuDisplay";



let parsedListArrayCurrent
let parsedListArray
let assignedListArrayCurrent
let reobjectedListArrayCurrent = []
let reobjectedListArray = []
let newBeautifulListArray = []
//called in clickBtnAddToBtnArray
function storeButtons(){
    let arrayOfBtnHTML = [];
    //need to get the innerHTML of the buttons, as the buttons themselves are meaningless converted to strings//
    for(let i=0; i<btnArray.length;i++){
        let textOfBtn = btnArray[i].innerHTML;
        arrayOfBtnHTML.push(textOfBtn);
    }

    const btnArrayObj = JSON.stringify(arrayOfBtnHTML); //stringify the array
    //console.log('listArrayCurrentObj')
    //console.log(listArrayCurrentObj);
    console.log('btnArrayObj');
    console.log(btnArrayObj);

    localStorage.setItem('btnArray', btnArrayObj); //set the key to the array & save

    let str = localStorage.getItem('btnArray'); //recall
    let parsedBtnArray = JSON.parse(str); //parse back to object
    console.log('parseBtn')
    console.log(parsedBtnArray);
    console.log(btnArray)
    let startingBtnArrayLength = btnArray.length; //need to define length here because the btnArray length will change as it is shifted out
    for(let i=0;i<startingBtnArrayLength;i++){
        btnArray.shift();
        console.log(btnArray)
    }
    console.log('btnArray')
    console.log(btnArray)
    for(let i=0;i<parsedBtnArray.length;i++){
        let btn = document.createElement('button');
        btn.innerHTML = parsedBtnArray[i];
        btnArray.push(btn);
    }
    console.log('btnArray')
    console.log(btnArray)
}

//saves the CURRENTLY SELECTED LIST 
function storelistArray(){
    const listArrayCurrentObj = JSON.stringify(listArrayCurrent)
    const listArrayObj = JSON.stringify(listArray)
    //console.log('listArrayCurrentObj')
    //console.log(listArrayCurrentObj);
    localStorage.setItem('listArrayCurrent', listArrayCurrentObj);
    localStorage.setItem('listArray', listArrayObj);
}

function produceListArray(){
  /*  
    let str = localStorage.getItem('listArrayCurrent');
    parsedListArrayCurrent = JSON.parse(str);
    for(let i=0;i<parsedListArrayCurrent.length;i++){
       const reAdded = new addTask(parsedListArrayCurrent[i])
       reobjectedListArrayCurrent.push(reAdded);
    }
    */
    let str2 = localStorage.getItem('listArray');
    parsedListArray = JSON.parse(str2);
    let parsedListArrayLength = parsedListArray.length;
    for(let i=0;i<parsedListArrayLength;i++){ //for the length of the whole of parsed list array
       let newInteriorArray = [];
        for(let i2=0;i2<parsedListArray[i].length;i2++){ //for the length of the i selected item in parsed list array
            let currentInteriorArray = parsedListArray[i] //identify the current object
           // console.log(currentInteriorArray)
            //console.log(currentInteriorArray[i2])
            let currentObject = currentInteriorArray[i2];
            //let currentObject = currentObjectOutside.taskName;
            //console.log(currentObject)
            let reformedObject = new addTask(currentObject.taskName, currentObject.description, currentObject.dueDate, currentObject.priority, currentObject.completeStatus, currentObject.deleteEligible, currentObject.formerArrayPosition, currentObject.currentArrayPosition); //Make it into an addTask
            currentObject = reformedObject
            //currentObjectOutside = reformedObject;
           // console.log(parsedListArray);
            newInteriorArray.push(reformedObject);
        }
        newBeautifulListArray.push(newInteriorArray)
    }

    console.log('parsedListArrayCurrent')
    console.log(parsedListArrayCurrent);
}


export {storeButtons, storelistArray, produceListArray, parsedListArrayCurrent, parsedListArray, newBeautifulListArray}