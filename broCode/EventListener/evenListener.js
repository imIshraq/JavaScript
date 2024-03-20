//  eventlistener = Listen for specific event to create interactive web pages events: click, mouseover, mouseout.
// .addEventListener(event, callback);
 
const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");


// myBox.addEventListener("click",event =>{
//     event.target.style.backgroundColor="tomato";
//     event.target.textContent ="ouch 😳";
// });

// myBox.addEventListener("mouseover",event =>{
//     event.target.style.backgroundColor="yellow";
//     event.target.textContent="don't do it 😯";

// });

// myBox.addEventListener("mouseout", event =>{
//     event.target.style.backgroundColor="lightgreen";
//     event.target.textContent="Click Me 😉";
// });

myButton.addEventListener("click",event =>{
    myBox.style.backgroundColor="tomato";
    myBox.textContent ="ouch 😳";
});

myButton.addEventListener("mouseover",event =>{
    myBox.style.backgroundColor="yellow";
    myBox.textContent="don't do it 😯";

});

myButton.addEventListener("mouseout", event =>{
    myBox.style.backgroundColor="lightgreen";
    myBox.textContent="Click Me 😉";
});