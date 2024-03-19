//  ---------- EX 2 <li> -------------

// step1 create the element 
const newListItem = document.createElement("li");


// step2 add attributes/properties
 newListItem.textContent="coconut";
newListItem.id ="coconut";
newListItem.style.fontWeight="bold";
newListItem.style.backgroundColor="lightgreen";

// step3 append element to DOM
document.body.append(newListItem);
document.body.prepend(newListItem);
document.getElementById("fruits").append(newListItem);
document.getElementById("fruits").prepend(newListItem);

const banana = document.getElementById("banana");
document.getElementById("fruits").insertBefore(newListItem, banana);

// if elements dont have id's
const fruits= document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newListItem,fruits[3])





// step4 remove html element (optional)
document.getElementById("fruits").removeChild(newListItem)