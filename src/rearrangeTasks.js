import { isThisSecond } from "date-fns";
import addTask from "./addTask";
import { listArrayCurrent, pinList } from "./menuDisplay";

export default function rearrangeTasks(){
    let allTaskFlexContainers = document.querySelectorAll('.taskFlex');
    let clickedTask
    let dropZone
    let draggableElement
    let id
    let indexOfDropPosition
    for (let i = 0; i < allTaskFlexContainers.length; i++) { 
        allTaskFlexContainers[i].draggable = true;
        allTaskFlexContainers[i].ondragstart = taskIsClicked;
        allTaskFlexContainers[i].ondragover = onDragOver;
        allTaskFlexContainers[i].ondrop = onDrop;
       // allTaskFlexContainers[i].addEventListener('ondragstart', taskIsClicked);
        //allTaskFlexContainers[i].addEventListener('mouseup', drop);
    }
    
    function taskIsClicked(event){
        event.dataTransfer.setData('text/plain', event.target.id)
        console.log(event.dataTransfer.getData('text'))
    }
    function onDragOver(event){
        event.preventDefault();
        console.log('I am firing')
        //event.target.appendChild(clickedTask);
    }
    function onDrop(event){
        event.preventDefault();
        id = event.dataTransfer.getData('text');
        draggableElement = document.getElementById(id);
        console.log('draggableElement')
        console.log(draggableElement);
        dropZone = event.target;
            console.log('dropZone')
            console.log(dropZone);
        changeArrayPositonsWhenDragged();
        console.log('list array current after drag')
        console.log(listArrayCurrent);
        pinList();
        event.dataTransfer.clearData();
    }
   
    function changeArrayPositonsWhenDragged(){
        indexOfDropPosition = dropZone.id;
        let indexOfHeldItem = id; //maybe unnecessary but easier to read for me;
        let heldItemActualObject = listArrayCurrent[indexOfHeldItem];
            console.log(heldItemActualObject)
        listArrayCurrent.splice(indexOfHeldItem,1)
            console.log(listArrayCurrent);
        listArrayCurrent.splice(indexOfDropPosition,0,heldItemActualObject)
            console.log(listArrayCurrent);
        heldItemActualObject.changeHeldPosition();
        indexOfDropPosition = ''
    }
    
    addTask.prototype.changeHeldPosition = function (){
        this.formerArrayPosition = indexOfDropPosition;
    }

    
}