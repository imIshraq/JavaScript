
// ternary operator= a shortcut to if and esle statements helps to assign a variable based on a condition 
// ( condition ? codeIftrue: codeIfFalse )
 
let age =21;
age>=18 ? "you are an adult": "you are a minor";
console.log(age)

function ageCalculator(){
    let age =21
    return age >=18 ? "you are an adult" : "you are a minor";

}
console.log(ageCalculator())


let isStudent = false;
let message= isStudent ? "you're a student": "you're not student";
 console.log(message)
  
let purchaseAmount = 100;
let discount =purchaseAmount >=99 ? 10 : 0;
console.log(`your total is $${purchaseAmount -purchaseAmount *(discount/100)}`)