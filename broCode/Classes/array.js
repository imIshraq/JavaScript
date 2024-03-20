//   array = a variable like structure taht can hold more than 1 value
 let fruits =["apple", "orange", "banana"];

fruits[0]= "coconut";
fruits.push("mango");// to push element to the end of array
fruits.pop();//  to remove last element from an array
fruits.unshift("pinapple");// add an element to the begining of an array
fruits.shift();// remove an element from the begining of an array

console.log(fruits);

let numOfFruits = fruits.length;// to finf the length of an array
let index=fruits.indexOf("mango");
console.log(numOfFruits);
console.log(index);
for (let i=0; i<=fruits.length; i++){
    console.log(i, fruits[i]);
    console.log(i, 'i am from console');
}
for (let i=fruits.length-1; i>=0; i--){
    console.log(fruits[i]);
}
fruits.sort();//sort arrays in alphabetical order
console.log(fruits);
fruits.sort().reverse();//sort arrays in reverse alphabetical order
console.log(fruits);