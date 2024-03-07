// // callback = a function that is passed as an argument to another function 

// //         used to handle  asynchronous operation
// //         1. reading a file 
// //         2. Network requests 
// //         3. Interacting with databases

hello(waiting) ;
goodbyee(leave);


function hello(ishraq ){
    console.log("Hello!");
    ishraq();
}
    
  
  
function goodbyee(callback){
    setTimeout(function(){
        console.log("Goodbye!");
    },4000);
    callback();
} 
 
function waiting(){
    console.log("still waiting");

}

function leave(){
    console.log("you may leave...");
} 

// }
function helloishraq(){
    console.log("hello ishraq ! ");
}
function waiting(){
    console.log("why are you waiting ishraq ! ");
}
function stillhere(){
    console.log("still here !!!");
}
function youmayleave(){
    console.log("you can leave now ishraq ! ");
}
function goodbye(){
    console.log("goodbye ishraq ");
}
function megaCombine(callback1, callback2, callback3, callback4,callback5){
   callback1();
   callback2();
   callback3();
   callback4();
   callback5();
}


megaCombine(helloishraq, waiting,stillhere,youmayleave,goodbye)

// add, subtract, multiply, divide, square, cube, num, num1, num2, megaTron 

function add(num1,num2){
    return num1+num2;
       
}
function subtract(num1,num2){
    return num1-num2;
       
}
function multiply(num1,num2){
    return num1*num2;
        
}
function divide(num1,num2){
    return num1/num2;
       
}
function square(num){
    return num*num;
        
}
function cube(num){
    return num*num*num;
      
}
   
function megaTron(fn1, fn2, fn3, fn4, fn5, fn6 ,a,b){
    let sum = fn1(a,b);
    let diff= fn2(a,b);
    let times= fn3(a,b);
    let div =fn4 (a,b);
    let power2 = fn5 (a);
    let power3  = fn6 (a);
     
    return {sum,diff,times,div,power2,power3}

}
 console.log(megaTron(add,subtract,multiply,divide,square,cube,2,4));

 

 