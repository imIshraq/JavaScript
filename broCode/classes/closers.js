// closure = A function defined inside of another function ,the inner functionhas access to the variables and scope of the outer function. Allow for private varaibles and state maintenance     used frequently in JS framworks :React, Vue, Angular

function outer(){
    let message ="hello";
    function inner(){
        console.log(message)
    }
    inner();
}
outer();
function createCounter(){
    let count = 0;
    function increment(){
     
        count++;
        console.log(`count increase to${count}`);
    }
    function getCount(){
        return count;
    }
    return{increment, getCount};
}

const counter = createCounter();
 
counter.increment();
counter.increment();

console.log(`the current count is ${counter.getCount()}`);

