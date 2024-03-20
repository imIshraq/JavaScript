// spread operator = ... allows an iterable such as an array or string to be expanded into separate elements (unpack the elements)


let numbers =[1,2,3,4,5];
let maximum= Math.min(...numbers);
console.log(maximum);

let username="randonperson";
let letters= [...username].join("-");
console.log(letters);
let fruits = ["apple","orange","banana"];
let vegetables =["carrots","cabbage", "tomato"];
let food = [...fruits, ...vegetables];
console.log(food);