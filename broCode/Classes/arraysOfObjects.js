// arrays of objects 
const fruits =[{name:"apple",color:"red", calories:95},
               {name:"orange", color:"orange", calories:45},
               {name:"banana",color:"yellow", calories:108},
               {name:"coconut",color:"white", calories:160},
               {name:"pineapple",color:"yellow",calories:40}];


console.log(fruits[4].color);

// add new object to array
fruits.push({name:"grapes",color:"purple",calories:62});
console.log(fruits);
//  to remove element fro array 
 fruits.pop(); 
 console.log(fruits);

//to remove elements   from certain range given
 fruits.splice(0,3);
 console.log(fruits);

// to loop through the elements of given array 
fruits.forEach(fruits => {console.log(fruits.calories)});


//  this method run each element through a function and return an array
const fruitsNames =fruits.map(fruit =>fruit.name);
 const fruitsColors =fruits.map(fruit=>fruit.color);
 console.log(fruitsNames);
 console.log(fruitsColors);

//  will return new array after using each element and  checking a condition
const yellowFruits = fruits.filter(fruit => fruit.color ==="yellow");
const lowCalFruits = fruits.filter(fruit => fruit.calories <100);
console.log(yellowFruits);
console.log(lowCalFruits);

//  will return a single value on an array 
const maxFruits = fruits.reduce((max,fruit)=> fruit.calories>max.calories ? fruit:max);
const minFruits= fruits.reduce((min,fruit)=> fruit.calories<min.calories ? fruit:min);
console.log(maxFruits.calories);
console.log(minFruits.calories);
