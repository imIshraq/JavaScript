// desructing = extract values from arrays and objects, then assign them to variables in a convenient way                     []  = to perform array destrcuting
// {}= to perform object destructing
 
// swap 2 elements in an array 
 
let a =1;
let b = 2;

[a,b]=[b,a] 
  
console.log(a);
console.log(b);


// swap two elements in an array 

const colors =["red", "green", "blue", "black", "white" ];
 
[colors[0],colors[4]] =[colors[4],colors[0]];

console.log(colors);

// assign array elements to variables
 
const colors1 =["red", "green", "blue", "black", "white" ];
 
const [fisrtColor, secondColor, thirdColor, ...extraColors]=colors;
console.log(fisrtColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

// extract values from objects

const person1 = {
    firstName :"Randonperson1",
    lastName :"Personlast1",  
    age : 24,
    job :"chef", 
}

const person2 = {
    firstName :"Randonperson2",
    lastName :"Personlast2",  
    age : 26,
   job :"engineer", 
}
const person0 = {
    firstName :"Randonperson0",
    lastName :"Personlast0",  
    age : 26,
    
}
 
const{firstName,lastName,age,job="Unemployed"} =person2;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

// Destructure in function parameters 

function displayPerson({firstName,lastName,age,job="Unemployed"}){
    console.log(`name :${firstName} ${lastName}`);
    console.log(`age:${age}`);
    console.log(`job:${job}`);
}





const person3 = {
    firstName :"Randonperson3",
    lastName :"Personlast3",  
    age : 24,
    job :"chef", 
}

const person4 = {
    firstName :"Randonperson4",
    lastName :"Personlast4",  
    age : 26,
   job :"engineer", 
}
 
displayPerson(person2)