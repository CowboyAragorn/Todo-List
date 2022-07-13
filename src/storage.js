import { listArray, btnArray } from "./menuDisplay";

export default function storage(){
    let arrayOfBtnHTML = [];
    //need to get the innerHTML of the buttons, as the buttons themselves are meaningless converted to strings//
    for(let i=0; i<btnArray.length;i++){
        let textOfBtn = btnArray[i].innerHTML;
        arrayOfBtnHTML.push(textOfBtn);
    }

    const btnArrayObj = JSON.stringify(arrayOfBtnHTML); //stringify the array
    //console.log('listArrayObj')
    //console.log(listArrayObj);
    console.log('btnArrayObj');
    console.log(btnArrayObj);

    localStorage.setItem('btnArray', btnArrayObj); //set the key to the array & save

    let str = localStorage.getItem('btnArray'); //recall
    let parsedBtnArray = JSON.parse(str); //parse back to object
    console.log('parseBtn')
    console.log(parsedBtnArray);


    const listArrayObj = JSON.stringify(listArray)
    //console.log('listArrayObj')
    //console.log(listArrayObj);
   

    localStorage.setItem('listArray', listArrayObj);

    let str2 = localStorage.getItem('listArray');
    let parsedListArray = JSON.parse(str2);
    //console.log(parsedListArray);






    localStorage.setItem('fruit', 'banana');
    let sayFruit = localStorage.getItem('fruit');
    console.log('sayFruit');
    console.log(sayFruit);
}