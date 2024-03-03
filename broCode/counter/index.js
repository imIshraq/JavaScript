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
// const myButton=document.getElementById("myButton");
// const myLabel1=document.getElementById("myLabel1");
// const myLabel2=document.getElementById("myLabel2");
// const myLabel3=document.getElementById("myLabel3");


// const min=1;
// const max=6;
// let randomNum1;
// let randomNum2;
// let randomNum3;
// myButton.onclick =function(){
//     randomNum1=Math.floor(Math.random()*max)+min;
//     randomNum2=Math.floor(Math.random()*max)+min;
//     randomNum3=Math.floor(Math.random()*max)+min;
//     myLabel1.textContent= randomNum1;
//     myLabel2.textContent= randomNum2;
//     myLabel3.textContent= randomNum3;
// }
// const myText= document.getElementById("myText");
// const mySubmit= document.getElementById("mySubmit");
// const resultElement =document.getElementById("resultElement");
// let age;
// mySubmit.onclick = function(){
//     age = myText.value;
//     age= Number(age);
//     if(age >=100){
//         resultElement.textContent= "You are too old to enter this site";
//     }
//     else if(age ==0){
//     resultElement.textContent= "you can't enter. you were just born.";
//         }
//     else if(age >=18){
//         resultElement.textContent= "You are old enough to enter this site";
//     }
//     else if (age < 0){
//         resultElement.textContent= "you can't be below 0";

//     }
//     else{
//     resultElement.textContent ="you must be 18+ to enter this site";
//     }
    

//   }
//   const myCheckBox = document.getElementById("myCheckBox");
//   const visaBtn = document.getElementById("visaBtn");
//   const masterCardBtn = document.getElementById("masterCardBtn");
//   const paypalBtn = document.getElementById("paypalBtn");
//   const mySubmit = document.getElementById("mySubmit");
//   const subResult = document.getElementById("subResult");
//   const paymentResult = document.getElementById("paymentResult");

//   mySubmit.onclick= function(){

//     if(myCheckBox.checked){
//         subResult.textContent= "You are SUBSCRIBED";
//     }
//     else{
//         subResult.textContent= "You are NOT SUBSCRIBED";
//     }

//     if (visaBtn.checked){
//         paymentResult.textContent="you are paying with Visa";
//     }
//     else if (masterCardBtn.checked){
//         paymentResult.textContent="you are paying with MasterCard";
//     }
//     else if (paypalBtn.checked){
//         paymentResult.textContent="you are paying with Paypal";
//     }
//     else {
//         paymentResult.textContent=" you must select a payment type ";
//     }

// }

// ternary operator= a shortcut to if and esle statements helps to assign a variable based on a condition 
// ( condition ? codeIftrue: codeIfFalse )
 
// let age =21;
// age>=18 ? "you are an adult": "you are a minor";
// console.log(age)

// function ageCalculator(){
//     let age =21
//     return age >=18 ? "you are an adult" : "you are a minor";

// }
// console.log(ageCalculator())


// let isStudent = false;
// let message= isStudent ? "you're a student": "you're not student";
//  console.log(message)
  
// let purchaseAmount = 100;
// let discount =purchaseAmount >=99 ? 10 : 0;
// console.log(`your total is $${purchaseAmount -purchaseAmount *(discount/100)}`)

// switch = can be an  efficient replacement to many if else statements

//  let day = 9; 
//  switch(day){
//     case 1:
//         console.log("it is monday");
//         break;
//     case 2:
//         console.log("it is tuesday")
//         break;
//     case 3:
//         console.log("it is wednesday");
//         break;
//     case 4:
//         console.log("it is thursday");
//         break;
//     case 5:
//         console.log("it is friday");
//         break;
//     case 6:
//         console.log("it is saturday");
//         break;
//     case 7:
//         console.log("it is sunday");
//         break;
//     default:
//             console.log(`${day} is not a day`)
        

//  }
    
    // let testScore = 50;
    // let letterGrade;
    // switch(true){
    //     case testScore >= 90:
    //         letterGrade ="A";
    //         break;
    //     case testScore >= 80:
    //         letterGrade="B";
    //         break;
    //     case testScore >= 70:
    //         letterGrade ="C";
    //         break;
    //     case testScore >= 60:
    //         letterGrade = "D";
    //         break;
    //     default:
    //         letterGrade="F"

    // }
    // console.log(letterGrade);
    