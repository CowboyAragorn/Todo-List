import addTask from "./addTask";
import {currentExitTaskArray, listArrayCurrent, pinList } from "./menuDisplay"

let crossedTasks = [];
function deleteTasks(){

    
addTask.prototype.makeCrossed = function(){
    this.completeStatus = 'crossed';

   /* let taskFlexContainer = document.getElementById('taskFlexContainer');
        let taskDisplayElement = document.createElement('p');
            taskDisplayElement.innerHTML = this.taskName;
            taskDisplayElement.classList.add('task','crossed');
        let taskExitBtn = document.createElement('button');
            taskExitBtn.classList.add('taskExitBtn', 'btn');
            currentExitTaskArray.push(taskExitBtn);
        let taskDisplayContainer = document.getElementById('taskDisplayContainer');
        taskDisplayContainer.append(taskFlexContainer);
        taskFlexContainer.append(taskExitBtn);
        taskFlexContainer.append(taskDisplayElement);
        */
}

    function moveFromTBDToComplete(){
        for(let i=0; i<currentExitTaskArray.length; i++){
            currentExitTaskArray[i].addEventListener('click', () =>{
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


export {deleteTasks, crossedTasks}
