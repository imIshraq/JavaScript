// string methods = string methods allows to work with text (strings) or allow you to manipulate and work with text(strings)

let userName0= "RandonPerson";
 

console.log(userName.charAt(1));//method used to index of charecters from strings
console.log(userName.indexOf("n"));//method use to find index number of charecters from strings
console.log(userName.lastIndexOf("r")); // used ot get the last index  of given chatrecters from  string
console.log(userName.length);// get the lenth of the given string
console.log(userName.trim());// method used to unwanted spaces from string 
console.log(userName.toUpperCase()); //method to used make  string into upper case alphabets
console.log(userName.toLowerCase());// method to used maken string into loewr case alphabets
console.log(userName.repeat(0)); //method to repeats the given strings



console.log(userName.startsWith(" "));// method used to determine if a string start with given charecter(boolean method) ,lets just run with if else program to understand it better

let userName = "RandomPerson ";
let result = userName.startsWith(" ");
if(result){
    console.log(userName);
}
else{
    console.log("your user name cant begin with ' '");
}
console.log(userName.endsWith(" "));//method used to check if a string ends with given charecter(boolean method) ,lets just run with if else program to understand it better
let userName1 = "RandomPerson ";
let result1 = userName1.endsWith("n");
if(result1){
    console.log(userName1);
}
else{
    console.log("your user name cant end  with letter ");
}

console.log(userName2.includes("s"));// method to find given object in the string and returns boolean value 
let phoneNumber ="123-456-789";
phoneNumber= phoneNumber.replaceAll("-","/");// method used to replace some charecters from string by given objects
console.log(phoneNumber);
let phoneNumber1 ="123-456-789";
console.log(phoneNumber1.padStart(13,"0"));// method used to start given string with given objects
console.log(phoneNumber1.padEnd(13,"0"));// method used to end string with given object