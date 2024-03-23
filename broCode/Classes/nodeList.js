// NodeList = Static collection of HTML by (id, class,element) can be created by using querySelectorAll(), Similar to an array, but no(map, filter, reduce ) , NodeList won't update to automatically reflect changes 
let buttons = document.querySelectorAll(".myButton");


// //  ADD HTML/CSS PROPERTIES

// buttons.forEach(button => {
//     button.style.backgroundColor= "green";
//     button.textContent +="😊"
// });

// //  CLICK event listener

// buttons.forEach(button => {
//     button.addEventListener("click", event =>{
//      event.target.style.backgroundColor="tomato";
//     //  event.target.textContent+= "😘"
//     });
// });

// // MOUSEOVER + MOUSEOUT event listener

// buttons.forEach(button =>{
//     button.addEventListener("mouseover",event =>{
//         event.target.style.backgroundColor ='hsl(205, 100%, 60%)';
//         // event.target.textContent += "yep🤞";
//     });
// });

// buttons.forEach(button =>{
//     button.addEventListener("mouseout",event =>{
//         event.target.style.backgroundColor ="hsl(205,100%,30%)";
//         // event.target.textContent += "no👍";
//     });
// });

// // ADD AN ELEMENT 

// const newButton = document.createElement("button"); //step 1 
// newButton.textContent= "Button5 😊" ;// step 2
// newButton.classList = "myButton";
// document.body.appendChild(newButton); // step 3

// buttons = document.querySelectorAll(".myButtons");


// REMOVE AN ELEMENT 
buttons.forEach(button =>{
    button.addEventListener("click", event =>{
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons");
    });
});