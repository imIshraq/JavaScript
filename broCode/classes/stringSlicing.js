// string slicing = creating a substring from a portion of another string 
 string.slice(start, end)
 let fullName = "Tom Cruise";
 let firstName1 = fullName.slice(0, 3);
 let lastName1 = fullName.slice(4,10);
 let lastChar = fullName.slice(-2);// you can negative number also it satrt from end

 console.log(firstName); 
 console.log(lastName);
 console.log(lastChar);
let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);
console.log(firstName);
console.log(lastName);
 
const email = "person123@gmail.com" ;
 let userName= email.slice(0,email.indexOf("@"));
 let extUserName = email.slice(email.indexOf("@")+1);
 console.log(userName);
 console.log(extUserName);
