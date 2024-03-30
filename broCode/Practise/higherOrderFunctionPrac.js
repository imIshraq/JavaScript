//  practise for map, filter, forEach, reduce, sort,arrow functions

// .map()
let peoples = [
  { person: "hey1", shirt: "blue", paint: "black" },
  { person: "hey2", shirt: "red", paint: "meron" },
  { person: "hey3", shirt: "orange", paint: "white" },
];
let ranpeoples = peoples.map((people) => {
  return people.shirt;
});
// console.log(ranpeoples);

const ages = [16, 20, 25, 30];
const names = ["person1", "person2", "person3", "person4"];

const studentsInfo = ages.map((age, index) => {
  const name = names[index];
  return {
    name: name,
    age: age,
  };
});
// console.log(studentsInfo);

const numbers1 = [1, 2, 3, 4, 5];
const multNumb = numbers1.map((value, index) => {
  const mulAns = value * [index];
  return mulAns;
});
// console.log(multNumb);

const products = [
  { name: "laptop", price: 1000, count: 5 },
  { name: "desktop", price: 1500, count: 2 },
  { name: "phone", price: 500, count: 10 },
];
const allPro = products.map((value) => {
  const itemCount = { name: value.name, totalVal: value.price * value.count };
  return itemCount;
});

// console.log(allPro);

// .filter()

const arr = [1, 2, 3, 4, 5, 6];
const findArr = arr.filter((element) => {
  return element % 2 == 0;
});
// console.log(findArr);

const animals = [
  { name: "lion", family: "Cat", food: "Meat" },
  { name: "sparrow", family: "Bird", food: "Grass" },
  { name: "Tiger", family: "Cat", food: "Meat" },
  { name: "Peacock", family: "Bird", food: "Grass" },
  { name: "Penguin", family: "Bird", food: "Fish" },
  { name: "eagle", family: "Bird", food: "Meat" },
];
const catFam = animals.filter((animal) => animal.family == "Cat");

const birdFam = animals.filter((animal) => animal.family == "Bird");

const onlyCats = animals.filter(
  (animal) => animal.family == "Cat" && animal.food == "Meat"
);
// console.log(onlyCats);
// console.log(catFam);
// console.log(birdFam);

// .forEach()

// const nums = [1, 2, 4, 5, 6, 3, 0];

// nums.forEach((num) => {
//   console.log(num * 2);
// });

const cities = ["hyderabad", "delhi", "chennai", "calcutta"];

cities.forEach((city, i, array) => {
  array[i] = city.charAt(0).toUpperCase() + city.slice(1);
});
// console.log(cities);

// console.log(cities);

for (let i = 0; i < cities.length; i++) {
  cities[i] = cities[i].charAt(0).toUpperCase() + cities[i].slice(1);
}
// console.log(cities);

// .reduce()

const objects = [
  { firstName: "hi", lastName: "bye", age: 25 },
  { firstName: "hi1", lastName: "bye1", age: 45 },
  { firstName: "hi2", lastName: "bye2", age: 25 },
  { firstName: "hi3", lastName: "bye3", age: 55 },
  { firstName: "hi4", lastName: "bye4", age: 45 },
];

let result = objects.reduce((accu, curr) => {
  if (accu[curr.age]) {
    accu[curr.age] = ++accu[curr.age];
  } else {
    accu[curr.age] = 1;
  }
  return accu;
}, {});
console.log(result);
