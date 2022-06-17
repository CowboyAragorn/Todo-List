import addTask from "./addTask";
import { listArrayCurrent, taskDisplayArray,
        currentCrossTaskButtonsArray,  deleteTaskButtonsArray, pinList} from "./menuDisplay"

let crossedTasks = [];
function deleteTasks(){
    let prototypeTrackerBecauseIIsOutOfScope
    let corralEligibiltyTracker
    let deleteEligibleArray = []
    //let deleteTaskTracker

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
                event.stopImmediatePropagation();                  
                })
            }
            crossedTasks = [] //empty crossed tasks since all of these gents are in listArrayCurrent back in pinList
    }

    //Following functions are for deleting already crossed tasks
    //Puts all the eligible for delete tasks into an array//
     function corralDeleteEligibleIntoArray(){
        for(let i=0; i<taskDisplayArray.length; i++){
            corralEligibiltyTracker = i;//Track i to be used in prototype
            taskDisplayArray[i].deleteEligibleHerder();
        }
    }
    addTask.prototype.deleteEligibleHerder = function(){
        if(this.deleteEligible == 'eligible'){ //If eligbile for deletion
            deleteEligibleArray.push(taskDisplayArray[corralEligibiltyTracker])//Put into the delete array
        }
    }

    //Saves tasks current position in the listArray so they can be accurately deleted when crossed//
    function currentArrayPositionTracker (){
        for(let p = 0; p < listArrayCurrent.length; p++){ //loop through current array assigning tracking number
            currentArrayPositionTracker = p;//tracker for i
            listArrayCurrent[p].saveCurrentArrayPosition(); //saves current position through prototype
            
        }    
    }
    addTask.prototype.saveCurrentArrayPosition = function(){
        this.currentArrayPosition = currentArrayPositionTracker;//current position is tracker position
    }
    //Assigns event listeners to the delete buttons for deletion//
    function assignDeleteTasksEventListeners(){
        for(let i=0; i<deleteTaskButtonsArray.length; i++){
                deleteTaskButtonsArray[i].addEventListener('click', () =>{ //for every button on the list, when I am clicked
                    currentArrayPositionTracker(); //Find the current position of my task
                    deleteEligibleArray[i].deleteTask();//delete that task, finding it in my array of eligible deletions
                    pinList(); //Put everyone back on the board
                    event.stopImmediatePropagation();   //stops it from bubbling to outside button
                  })
            };
    }
    addTask.prototype.deleteTask = function(){
        let currentPositionTracker = this.currentArrayPosition//find current position
        listArrayCurrent.splice(currentPositionTracker,1)//remove it from the currentListArray
    }

    assignCrossedTasksEventListeners();//assign event listeners for cross buttons
    corralDeleteEligibleIntoArray(); //corral all my eligible deletions
    assignDeleteTasksEventListeners(); //assign event listeners for deletions
}


export {deleteTasks, crossedTasks}
