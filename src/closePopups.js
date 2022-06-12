//This function closes popups using their x buttons//
export default function closePopups(){
//x makes the popup invisible again. Probably need to reset it, do so later//

//Not sure if it is more/less coupled to declare the arrays here rather than making the arrays in the skeleton and importing them over.
//I think it is a little clearer where the data for the arrays is coming from over here
//The only foreseeable problem would be if a variable name is changed there it would have to be changed here as well

//array of the x's//
let closePopupsArray = [];

let closeTaskPopup = document.getElementById('listExitBtn');
    closePopupsArray.push(closeTaskPopup)
const addListExitBtn = document.getElementById('addListExitBtn');
    closePopupsArray.push(addListExitBtn)


//array of the popouts//
let popoutArray = []; 

let taskPopoutBox = document.getElementById('taskPopoutBox');
    popoutArray.push(taskPopoutBox);
const addListPopoutBoxContainer = document.getElementById('addListPopoutBoxContainer');
    popoutArray.push(addListPopoutBoxContainer);
   

//In order, link the arrays 1 to 1 and assign the event listener to close that item of the array//
for(let i=0; i<closePopupsArray.length;i++){
closePopupsArray[i].addEventListener('click', () =>{
     popoutArray[i].style.display = 'none'; //Erasing popup display from sight until clicking a list//
})
}
}


