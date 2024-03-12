// sort = method used to sort element of an array in place.       sort elements as strings in lexicographic order, not alphabetical .lexicographic =(alphabet + numbers +  symbols) as strings
   
const fruits= ["apple","orange","banana","coconut","pineapple"];

fruits.sort();

console.log(fruits);

const numbers=[2,9,7,5,4,1,6,3,8,10];

numbers.sort((a,b)=> a-b);
numbers.sort((a,b)=> b-a);
 
console.log(numbers);

const people =[{name:"randomperson1",age:29,gpa:2.5},
               {name:"randomperson2",age:34,gpa:1.8},
               {name:"randomperson3",age:39,gpa:2.8},
               {name:"randomperson4",age:24,gpa:3.9}];

  people.sort((a,b)=> a.age-b.age); 
  people.sort((a,b)=> b.age-a.age);  
  console.log(people);    
  people.sort((a,b)=> a.gpa-b.gpa);
  console.log(people);
  people.sort((a,b) => a.name.localeCompare(b.name));
  console.log(people);
  people.sort((a,b) => b.name.localeCompare(a.name));
  console.log(people);
