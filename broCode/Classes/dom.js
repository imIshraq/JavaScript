// DOM = DOCUMENT OBJECT MODEL 
//       Object{} that represents the page you see in the web browser nd provides you with an API to interact with it. Web browser constructs the DOM when it lands it's loads an HTML document, and structures all the elements in a tree-like representation. JavaScript can access the DOM to dynamically change the content , structure, and style of a web page.

document.title ="My Website";
document.body.style.backgroundColor="hsl(0,0%,15%)";

const username ="Randonperson";
const welcomeMsg= document.getElementById("welcome-msg");
 
welcomeMsg.textContent += username === "" ? `guest` : username;

