import addTask from "./addTask";
import { listArrayCurrent, taskDisplayArray,
        currentCrossTaskButtonsArray,  deleteTaskButtonsArray, pinList} from "./menuDisplay"

let crossedTasks = [];
function deleteTasks(){
    let prototypeTrackerBecauseIIsOutOfScope
    //allows switching between crossed & uncrossed
    addTask.prototype.makeCrossed = function(){
        if(this.completeStatus == undefined || this.completeStatus == 'incomplete'){ //if uncrossed
            crossedTasks.push(listArrayCurrent[prototypeTrackerBecauseIIsOutOfScope]); //Move my corresponding listArrayCurrent member into crossedTasks
            listArrayCurrent.splice(prototypeTrackerBecauseIIsOutOfScope,1); //Remove him from the list array
            this.completeStatus = 'crossed'; //changes to crossed out & moves to bottom array//
        }
        else if(this.completeStatus == 'crossed'){ //if crossed
            this.completeStatus = 'incomplete';
        }
    }
    //assigns the event listeners to the crossed tasks button, allowing them to actually cross//
    function assignCrossedTasksEventListeners(){
        for(let i=0; i<currentCrossTaskButtonsArray.length; i++){
            currentCrossTaskButtonsArray[i].addEventListener('click', () =>{ //for every button on the list, when I am clicked
                prototypeTrackerBecauseIIsOutOfScope = i
                taskDisplayArray[i].makeCrossed(); //Change the task to either crossed or uncrossed
                pinList(); //Put everyone back on the board
                  
                })
            }
            crossedTasks = [] //empty crossed tasks since all of these gents are in listArrayCurrent back in pinList
    }
    function assignDeleteTasksEventListeners(){
        for(let i=0; i<deleteTaskButtonsArray.length; i++){
                deleteTaskButtonsArray[i].addEventListener('click', () =>{ //for every button on the list, when I am clicked
                pinList(); //Put everyone back on the board
                  
                        })
            };
    }

    assignCrossedTasksEventListeners();
    assignDeleteTasksEventListeners();
}


export {deleteTasks, crossedTasks}
