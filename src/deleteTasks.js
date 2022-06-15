import {currentExitTaskArray, listArrayCurrent, pinList } from "./menuDisplay"

let crossedTasks = [];
function deleteTasks(){
    console.log(currentExitTaskArray)


    for(let i=0; i<currentExitTaskArray.length; i++){
        console.log(currentExitTaskArray)
        currentExitTaskArray[i].addEventListener('click', () =>{
            crossedTasks.push(listArrayCurrent[i]);
            console.log('i='+i);
            listArrayCurrent.splice(i,1);
            console.log(crossedTasks);
            console.log(listArrayCurrent);
            pinList();
        })
    }


    /*
    for(let i=0; i<currentExitTaskArray.length;i++){
        let crossFlag = i+0;
        const element = document.getElementsByClassName('taskFlex')
        currentExitTaskArray[i].addEventListener('click', () =>{
        if (crossFlag == i+0){
        element[i].classList.add('crossed');
        crossFlag = i+1;
        }
        else if (crossFlag == i+1){
            element[i].classList.add('uncrossed');
            crossFlag = i+0;
        
        }
     })
    }
    */
}


export {deleteTasks, crossedTasks}
