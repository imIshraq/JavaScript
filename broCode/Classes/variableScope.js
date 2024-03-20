//  variable scope = where a variable is recognized and accessible (local scope vs global scope) avoid defining variables outisde of functions
let x =1;

function function1(){
    let x = 1;
    console.log(x);

}

function function2(){
     let y = 2;
     console.log(y);   
}
function1();function2();
 