const myText= document.getElementById("myText");
const mySubmit= document.getElementById("mySubmit");
const resultElement =document.getElementById("resultElement");
let age;
mySubmit.onclick = function(){
    age = myText.value;
    age= Number(age);
    if(age >=100){
        resultElement.textContent= "You are too old to enter this site";
    }
    else if(age ==0){
    resultElement.textContent= "you can't enter. you were just born.";
        }
    else if(age >=18){
        resultElement.textContent= "You are old enough to enter this site";
    }
    else if (age < 0){
        resultElement.textContent= "you can't be below 0";

    }
    else{
    resultElement.textContent ="you must be 18+ to enter this site";
    }
    

  }
  const myCheckBox = document.getElementById("myCheckBox");
  const visaBtn = document.getElementById("visaBtn");
  const masterCardBtn = document.getElementById("masterCardBtn");
  const paypalBtn = document.getElementById("paypalBtn");
  const mySubmit = document.getElementById("mySubmit");
  const subResult = document.getElementById("subResult");
  const paymentResult = document.getElementById("paymentResult");

  mySubmit.onclick= function(){

    if(myCheckBox.checked){
        subResult.textContent= "You are SUBSCRIBED";
    }
    else{
        subResult.textContent= "You are NOT SUBSCRIBED";
    }

    if (visaBtn.checked){
        paymentResult.textContent="you are paying with Visa";
    }
    else if (masterCardBtn.checked){
        paymentResult.textContent="you are paying with MasterCard";
    }
    else if (paypalBtn.checked){
        paymentResult.textContent="you are paying with Paypal";
    }
    else {
        paymentResult.textContent=" you must select a payment type ";
    }

}

