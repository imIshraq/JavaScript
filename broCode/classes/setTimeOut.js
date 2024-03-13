// setTimeOut()= function in JavaScript that allows you to schedule the execution of a function after an amount of time (milliseconds), Times  are approximate (varies based on the wokrlaod of the JavaScript runtime env.)
// setTimeout(callback, delay);
 
 function sayHello(){
    console.log("H3llo");
 }
  setTimeout(sayHello, 4000);

  setTimeout(function(){console.log("he1lo")},5000);

  setTimeout(()=>{console.log("hell0")},6000);

 const timeOutId= setTimeout(()=> window.alert("hello"),3000);

 clearTimeout(timeOutId);


 let timeOutId1;

 function startTimer(){
     timeOutId =setTimeout(()=> window.alert ("Hello"),3000); 
     console.log("Started")  
 }
  function clearTimer(){
    clearTimeout((timeOutId));
    console.log("Cleared");
  }