// Math =  built-in object that provides a 
    // collection of properties and methods

        let x= 2;
        let y= 7;
        let z=1;
        z= Math.round(x); //always rounds the value down
        z= Math.floor(x);//always rounds the value down
         z= Math.ceil(x); //always rounds the value up
         z= Math.trunc(x);// will eliminate any decimal portion
        z= Math.pow(x,y);// to give base as a power value
        z= Math.sqrt(y); //to find the squaare root
        z= Math.log(y); //to find log values
         z= Math.abs(y);// changes the value to positive
        let max= Math.max(x,y,z); //find the maximum value 
        let min= Math.min(x,y,z);// find the minimum valuee
        console.log(max , min);

// random number generator
const minimum= 50;
const maxmimum= 100;

let randomNum = Math.floor(Math.random() * (max-min)) + min;
console.log(randomNum);
const myButton=document.getElementById("myButton");
const myLabel1=document.getElementById("myLabel1");
const myLabel2=document.getElementById("myLabel2");
const myLabel3=document.getElementById("myLabel3");


const mini=1;
const maxi=6;
let randomNum1;
let randomNum2;
let randomNum3;
myButton.onclick =function(){
    randomNum1=Math.floor(Math.random()*max)+min;
    randomNum2=Math.floor(Math.random()*max)+min;
    randomNum3=Math.floor(Math.random()*max)+min;
    myLabel1.textContent= randomNum1;
    myLabel2.textContent= randomNum2;
    myLabel3.textContent= randomNum3;
}

