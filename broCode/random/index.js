//  let username;

//  username = window.prompt("what's your username? ");

// console.log(username);
// let username;
// document.getElementById("mySubmit").onclick = function(){
//      username = document.getElementById('myText').value
//      console.log(username);
//      document.getElementById('myH1').textContent = `Bingo ${username}`
// }

// const decreasebtn = document.getElementById("decreaseBtn");
// const resetbtn = document.getElementById("resetBtn");
// const increasebtn = document.getElementById("increaseBtn");
// const countLabel = document.getElementById("countLabel");
//  let count =0;
//  increaseBtn.onclick= function(){
//     count++;
//     countLabel.textContent = count;


//  }
//  decreaseBtn.onclick= function(){
//     count--;
//     countLabel.textContent = count;
//  }
//  resetBtn.onclick= function(){
//     count = 0;
//     countLabel.textContent = count;
//  }
    // const decreaseBtn = document.getElementById("decreaseBtn");
    // const resetBtn = document.getElementById("resetBtn");
    // const increaseBtn = document.getElementById("increaseBtn");
    // const countLabel = document.getElementById("countLabel"); 
    // let count=0

    // increaseBtn.onclick=function(){
    //     count++;
    //     countLabel.textContent=count;

    // }
    // decreaseBtn.onclick=function(){
    //     count--;
    //     countLabel.textContent=count;

    // }
    // resetBtn.onclick=function(){
    //     count=0;
    //     countLabel.textContent=count;
        
    // }
    // Math =  built-in object that provides a 
    //collection of properties and methods

        let x= 2;
        let y= 7;
        let z=1;
        // z= Math.round(x); always rounds the value down
        // z= Math.floor(x);always rounds the value down
        //  z= Math.ceil(x); always rounds the value up
        //  z= Math.trunc(x); will eliminate any decimal portion
        // z= Math.pow(x,y); to give base as a power value
        // z= Math.sqrt(y); to find the squaare root
        // z= Math.log(y); to find log values
        //  z= Math.abs(y);// changes the value to positive
        // let max= Math.max(x,y,z); find the maximum value 
        // let min= Math.min(x,y,z); find the minimum valuee
        // console.log(max , min);

// random number generator
// const min= 50;
// const max= 100;

// let randomNum = Math.floor(Math.random() * (max-min)) + min;
// console.log(randomNum);
const myButton=document.getElementById("myButton");
const myLabel=document.getElementById("myLabel");
const min=1;
const max=6;
let randomNum;
myButton.onclick =function(){
    randomNum=Math.floor(Math.random()*max)+min;
    myLabel.textContent= randomNum;
}