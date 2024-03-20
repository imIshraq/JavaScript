// logical operators = they used to combine or maipilate boolean values (true or false)
//              AND &&
//              OR ||
//              NOT !

// -------- AND  logical operator(&&) -------  in this both condition need to be true then only its execute 
const temp = 31;
if(temp >0 && temp <=30){
    console.log("The weather is good");
}
else {
    console.log("The weather is bad");
}
// -------- OR   logical operator(||) -------  in this one  condition need to be true then only its execute 
const temp1 = 10;
if(temp1 <=0 || temp1 > 30){
    console.log("The weather is bad");
}
else {
    console.log("The weather is good");
}
// -------- NOT logical operator(!) ------- it is used to flip the boolean value from true to false or false to true

const isSunny  = false;
if(!isSunny){
    console.log("The weather is cloudy");
}
else {
    console.log("The weather is sunny");
}