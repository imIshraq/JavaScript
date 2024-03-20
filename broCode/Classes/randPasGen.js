// RANDOM PASSWORD GENERATOR

function generatePassword(length,includeLowerCase,includeUpperCase,includeUpperCase,includeNumbers,includeSybmbols){
   const lowercaseChars ="abcdefghijklmnopqrstuvwxyz";
   const uppercaseChars ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const numbersChars ="0123456789";
   const symbolsChars ="!@#$%^&*()_+=";
   let allowedchars ="";
   let password="";

   allowedchars += includeLowerCase ? lowercaseChars :"";
   allowedchars += includeUpperCase ? uppercaseChars :"";
   allowedchars += includeNumbers ? numbersChars: "";
   allowedchars += includeSybmbols ? symbolsChars: "";

    if (length<=0){
        return ("password lenngth must be atleast 1!");
    }
    if (allowedchars.length===0){
        return ("atleast 1 set of charecter needs to be selected ");
    }
    for(let i=0;i<length;i++){
        const randomIndex = Math.floor(Math.random()*allowedchars.length);
        password += allowedchars[randomIndex];

    }
   
    return password;
}

const passwordLength   = 19;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers   = true;
const includeSybmbols  = true;

const password =generatePassword(passwordLength,
                                includeLowerCase,
                                includeUpperCase,
                                includeUpperCase,
                                includeNumbers,
                                includeSybmbols);
 
  console.log(`Generated password:${password}`);