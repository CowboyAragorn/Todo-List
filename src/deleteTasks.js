import addTask from "./addTask";
import {currentExitTaskArray, listArrayCurrent, listArrayCurrentName, pinList } from "./menuDisplay"

let crossedTasks = [];
function deleteTasks(){

let formerArrayPositionTracker
    
addTask.prototype.makeCrossed = function(){
    if(this.completeStatus == undefined || this.completeStatus == 'incomplete'){
    this.completeStatus = 'crossed'; //changes to crossed out & moves to bottom array//
    this.formerArrayPosition = formerArrayPositionTracker;
    console.log(this.formerArrayPosition)
    }
    else if(this.completeStatus == 'crossed'){
        this.completeStatus = 'incomplete';
    }
}

    function moveFromTBDToComplete(){
        for(let i=0; i<currentExitTaskArray.length; i++){
            currentExitTaskArray[i].addEventListener('click', () =>{
                formerArrayPositionTracker = i;
                crossedTasks.push(listArrayCurrent[i]);
                console.log('i='+i);
                listArrayCurrent.splice(i,1);
                for (let p=0;p<crossedTasks.length;p++){
                    crossedTasks[p].makeCrossed();
                    listArrayCurrent.push(crossedTasks[p]);
                }
                //listArrayCurrent.push(crossedTasks);
                console.log('crossedTasks')
                console.log(crossedTasks);
                console.log('listArrayCurrent');
                console.log(listArrayCurrent);
                pinList();
            })
        }
        crossedTasks = [];

    }

    moveFromTBDToComplete();

}


export {deleteTasks}
