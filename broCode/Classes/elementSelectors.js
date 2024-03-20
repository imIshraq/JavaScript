// element selectors = Methods used to target and manipulate HTML elements, They allow you to select one or multiple HTML elements from The DOM(Document Object Model)

// 1. document.getElementById()        // ELEMENT OR NULL
const myHeading= document.getElementById("my-heading");
myHeading.style.backgroundColor="yellow";
myHeading.style.textAlign="center";

// 2. document.getElementsByClassName()// HTML COLLECTION
const fruits = document.getElementsByClassName("fruits");

fruits[0].style.backgroundColor = "yellow";

for (let fruit of fruits){
    fruits.style.backgroundColor="yellow";
}

Array.from(fruits).forEach(fruit =>{
    fruit.style.backgroundColor= "yellow";
})

// 3. document.getElementsByTagName()  // HTML COLLECTION 
 
const h4Elements= document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

console.log(h4Elements);

h4Elements[0].style.backgroundColor ="yellow";

for (let h4Element of h4Elements){
    h4Element.style.backgroundColor="yellow";
}

for (let liElement of liElements){
    liElement.style.backgroundColor="lightgreen";
}

Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.backgroundColor ="lightyellow";
})

Array.from(liElements).forEach(liElement => {
    liElement.style.backgroundColor ="lightred";
})

// 4. document.querySelector()         // ELEMENT OR NULL

const element = document.querySelector(".fruits");

element.style.backgroundColor= "yellow";

// 5. document.querySelectorAll()      // NODELIST

const fruits = document.querySelectorAll("fruits");

fruits[0].style.backgroundColor ="yellow";

foods.forEach(food => {
    food.style.backgroundColor= "yellow";
});