// function declaration = define a reusable block of code that performs a specific task
function fellow(){
    console.log("hello fellow");
}
fellow();

// function expression = a way to define a function as values or variables

// setTimeout(function(){
//     console.log("hello again")
// },1000);




const numbers=[1,2,3,4,5,6];
const  suqares =numbers.map(function(element){
    return Math.pow(element, 2);
});
console.log(suqares);
const  cubes =numbers.map(function(element){
    return Math.pow(element, 3);
});
console.log(cubes);