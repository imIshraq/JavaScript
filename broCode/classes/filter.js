// .filter() = creates a new array by filtering out elements

let numbers=[1,2,3,4,5,6,7,8,10];
let evenNumbers = numbers.filter(isEven);
let oddNumbers = numbers.filter(isodd);

console.log(evenNumbers);
console.log(oddNumbers);


  function isEven(element){
        return element % 2 === 0;       
  }

  function isodd(element){
    return element % 2 !== 0;       
}


const ages=[14,15,16,17,18,19,20,20,60];
const adults=ages.filter(isAdult);
const teenAgers=ages.filter(isTeens);
console.log(adults);
console.log(teenAgers);
function isAdult(element){
    return element >=18;

}

function isTeens(element){
    return element <18;
}


const fruits=["apple","orange","banana","kiwi","pineapple","watermelon"];
const shortFruits = fruits.filter(getShortFruits);
const longFruits = fruits.filter(getLongFruits);
console.log(shortFruits);
console.log(longFruits);

function getShortFruits(element){
    return   element.length <=6;
    
}
function getLongFruits(element){
    return   element.length >6;
    
}