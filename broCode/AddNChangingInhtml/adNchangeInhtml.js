// Add and Change html elements using javscript

// ---- EX 1 -----

// step 1 create the element 
const newH1 =document.createElement("h1");
const newH2 = document.createElement("h2");

// step 2 add attributes/properties
newH1.textContent="I like fresh food";
newH1.id="myH1";
newH1.style.color="tomato";
newH1.style.textAlign="center";
newH2.textContent="And also fresh juices";
newH2.id="myH2";
newH2.style.color="tomato";
newH2.style.textAlign="center";


// step 3 append element to DOM
document.body.prepend(newH1);
document.body.append(newH2);
document.getElementById("box1").append(newH1);
document.getElementById("box1").prepend(newH1);
const box2 = document.getElementById("box2");
document.body.insertBefore(newH1,box2)

// if  html elements dont have id's 
const boxes= document.querySelectorAll(".box");
document.body.insertBefore(newH1, boxes);



// step 4 remove html element

document.getElementById("box1").removeChild(newH1);




