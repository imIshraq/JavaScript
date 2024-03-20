// eventListener = listen for specific events to create interactive web pages : keydown, keyup,
//  document.addEventlistener(event, callback);

// const myBox= document.getElementById("myBox");

// document.addEventListener("keydown",event =>{
//     myBox.textContent="😯";
//     myBox.style.backgroundColor="tomato";
// });

// document.addEventListener("keyup", event =>{
//     myBox.textContent="😊";
//     myBox.style.backgroundColor="lightablue";
// });

const myBox= document.getElementById("myBox");
const moveAmount =70;
let x=0;
let y=0;

document.addEventListener("keydown",event =>{
    myBox.textContent ="😳";
    myBox.style.backgroundColor="tomato";
});

document.addEventListener("keyup",event =>{
    myBox.textContent="😂";
    myBox.style.backgroundColor="yellow";

});

document.addEventListener("keydown",event =>{
    if (event.key.startsWith("Arrow")){

        event.preventDefault();

        switch(event.key){
          case "ArrowUp":
               y -= moveAmount;
               break;
          case "ArrowDown":
               y += moveAmount;
                break;
          case "ArrowLeft":
               x -= moveAmount;
               break;
          case "ArrowRight":
               x += moveAmount;
               break;    

        }
        myBox.style.top=`${y}px`;
        myBox.style.left=`${x}px`;

    }
});