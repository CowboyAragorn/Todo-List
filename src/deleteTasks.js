import addTask from "./addTask";
import {currentExitTaskButtonsArray, listArrayCurrent, taskDisplayArray, listArrayCurrentName, pinList } from "./menuDisplay"

let crossedTasks = [];
function deleteTasks(){

let formerArrayPositionTracker
let prototypeTrackerBecauseIIsOutOfScope
    
addTask.prototype.makeCrossed = function(){
    if(this.completeStatus == undefined || this.completeStatus == 'incomplete'){ //if uncrossed
        console.log(prototypeTrackerBecauseIIsOutOfScope)
        crossedTasks.push(listArrayCurrent[prototypeTrackerBecauseIIsOutOfScope]); //Move my corresponding listArrayCurrent member into crossedTasks
        console.log('crossedTasks')
        console.log(crossedTasks);
        listArrayCurrent.splice(prototypeTrackerBecauseIIsOutOfScope,1); //Remove him from the list array
        console.log('listArrayCurrent');
        console.log(listArrayCurrent);
    
        console.log('taskDisplayArrayinDelete')
        console.log(taskDisplayArray)
    
        this.completeStatus = 'crossed'; //changes to crossed out & moves to bottom array//
        this.formerArrayPosition = formerArrayPositionTracker;
        console.log(this.formerArrayPosition)
    }
    else if(this.completeStatus == 'crossed'){ //if crossed
        this.completeStatus = 'incomplete';
    }
}
//EVENT LISTENER FUNCTION//
    function moveFromTBDToComplete(){
        for(let i=0; i<currentExitTaskButtonsArray.length; i++){
            crossedTasks.id = listArrayCurrentName;
            console.log(prototypeTrackerBecauseIIsOutOfScope)
            currentExitTaskButtonsArray[i].addEventListener('click', () =>{ //for every button on the list, when I am clicked
                prototypeTrackerBecauseIIsOutOfScope = i
                taskDisplayArray[i].makeCrossed(); //Change the task to either crossed or uncrossed
                pinList(); //Put everyone back on the board
                  
            })
        }
        
        crossedTasks = [] //empty crossed tasks since all of these gents are in listArrayCurrent back in pinList
    }

    moveFromTBDToComplete();

}


export {deleteTasks, crossedTasks}
