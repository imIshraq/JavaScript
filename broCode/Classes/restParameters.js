 // rest parameter = (...rest) allow a function work with a variable number of arguments by bundling then into an array    
 // spred= expands an array into separate elements
 // rest = bundles separates elements into an array

 function openFridge(...foods){
        console.log(...foods);
 }

    const food1= "pizza";
    const food2="hamburger";
    const food3= "hotdog";
    const food4= "sushi";
    const food5= "ramen";

   openFridge(food1,food2,food3,food4);
function getFood(...foods){
    return foods;
}
const foods = getFood(food1,food2,food3,food4,food5);
    console.log(foods);
  
function sum(...numbers){
    let result=0;
    for(let number of numbers){
        result+= number;
    }
    return result;
}

const total= sum(1,2,3,4,5);
console.log(`your total is $${total}`);
 function getAverage(...numbers){
    let result=0;
    for(let number of numbers){
        result += number;
    }
    return result/numbers.length;

 }

 const total1=getAverage(34,46,67,99);
 console.log(total1);
function combineStrings(...strings){
    return strings.join(" ");

}
const fullName= combineStrings("Mr.", "kings","Chalres","II");
   
   console.log(combineStrings("mr","i","am","learner"));