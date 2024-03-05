// function = a section of reusable code .Declare code once, use it whenever you want.Call the function to execute that code.
function happybirthday(){
    console.log("happy birthday to you");
    console.log("happy birthday to you");
    console.log("happy birthday dear you");
    console.log("happy birthday to you");

} 
happybirthday();
function happybirthday(username,age){
    console.log("happy birthday to you");
    console.log("happy birthday to you");
    console.log(`happy birthday dear ${username}`);
    console.log("happy birthday to you");
    console.log(`you are ${age} year old`);

} 
happybirthday("ishraq",24);

function add(x,y){
    let result=x+y;
    return result;
}
 
let answer =add(2,3);
console.log(answer);
function subtract(x,y){
    return x-y;
}
 
console.log(subtract(3,2))
function isEven(number){
    if (number % 2 === 0){
        return true;
    }
    else{
        return false;
    }

}
console.log(isEven(5))
function isEven(number){
   return number % 2 === 0 ? true: false;
}
console.log(isEven(5))
 function isValidEmail(email){
        if (email.includes("@")){
            return true;
        }
        else{
            return false;
        }
 }
     console.log(isValidEmail("jeffbezos@gmail.com"));
     console.log(isValidEmail("amazon.com"));