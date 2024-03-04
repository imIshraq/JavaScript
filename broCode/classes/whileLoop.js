//while loop = reapeat some code While some conditions is true
//------ normal program --------
let userName = "";
while(userName === "" || userName ===null){
    userName = window.prompt("enter your name");
}
console.log(`hello ${userName}`);
if (userName = ""){
    console.log(`hello ${userName}`);
}
else{
    console.log("you did'nt enter your name");
}    
// ------ while loop -----
let loggedIn0 = false;
let userName0;
let password0;
 while(!loggedIn0){
    userName0= window.prompt(`enter your username`);
    password0= window.prompt(`enter your password`);
     
    if(userName0 === "myusername" && password0=== "mypassword"){
        loggedIn0= true;
        console.log("you are logged in");
    }
    else {
          console.log("Invalid credentials! please try again");
    }
 }
 // ----- do while loop -----
let loggedIn1 = true;
let userName1;
let password1;
 do{
    userName1= window.prompt(`enter your username`);
    password1= window.prompt(`enter your password`);
     
    if(userName1 === "myusername" && password1=== "mypassword"){
        loggedIn1= true;
        console.log("you are logged in");
    }
    else {
          console.log("Invalid credentials! please try again");
    }
 }while(!loggedIn1)