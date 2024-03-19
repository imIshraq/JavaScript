//  DOM Navigation = The process of navigating through the structure of an HTML document using JavaScript.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .prevoiusElementSibling
// .parentElements
// .children

// .firstElementChild

const element = document.getElementById("fruits");
 const fisrtChild=element.firstElementChild;
 fisrtChild.style.backgroundColor="yellow";

 const ulElements =document.querySelectorAll("ul");

 ulElements.forEach(ulElements =>{
    const fisrtChild = ulElements.firstElementChild;
    fisrtChild.style.backgroundColor="yellow";
 });

 // .lastElementChild

 const element1= document.getElementById("vegetables");
 const lastChild= element1.lastElementChild;
 lastChild.style.backgroundColor="yellow";

 const ulElements1 = document.querySelectorAll("ul");
   ulElements1.forEach(ulElements1 => {
        lastChild= ulElements1.lastElementChild;
        lastChild.style.backgroundColor="yellow";
   });

// .nextElementSibling
const element2= document.getElementById("apple");
const nextSibling=element2.nextElementSibling;
 nextSibling.style.backgroundColor ="yellow";

//  .prevoiusElementSibling
const element3= document.getElementById("vegetables");
 const prevSibling=element3.previousElementSibling;
 prevSibling.style.backgroundColor="yellow";

//  .parentElements
const element4= document.getElementById("icecream");
 const parent = element4.parentElement;
 parent.style.backgroundColor="yellow";

// .children
const element5= document.getElementById("vegetables");
const children = element5.children;

Array.from(children).forEach(child =>{
        child.style.backgroundColor ="yellow";
});

children[1].style.backgroundColor="yellow";






 