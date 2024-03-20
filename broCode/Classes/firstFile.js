 let username;

 username = window.prompt("what's your username? ");

console.log(username);
let username;
document.getElementById("mySubmit").onclick = function(){
     username = document.getElementById('myText').value
     console.log(username);
     document.getElementById('myH1').textContent = `Bingo ${username}`
}

const decreasebtn = document.getElementById("decreaseBtn");
const resetbtn = document.getElementById("resetBtn");
const increasebtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
 let count =0;
 increaseBtn.onclick= function(){
    count++;
    countLabel.textContent = count;


 }
 decreaseBtn.onclick= function(){
    count--;
    countLabel.textContent = count;
 }
 resetBtn.onclick= function(){
    count = 0;
    countLabel.textContent = count;
 }
    const decreaseBtn = document.getElementById("decreaseBtn");
    const resetBtn = document.getElementById("resetBtn");
    const increaseBtn = document.getElementById("increaseBtn");
    const countLabel = document.getElementById("countLabel"); 
    let count=0

    increaseBtn.onclick=function(){
        count++;
        countLabel.textContent=count;

    }
    decreaseBtn.onclick=function(){
        count--;
        countLabel.textContent=count;

    }
    resetBtn.onclick=function(){
        count=0;
        countLabel.textContent=count;
        
    }
    