// arrow functions = a coincise way to write function expressions good for simple functions that you can use only once (parameters ) => some code which you want to run

// ------ normal function -----
function hello(){
    console.log("hello ")
}
 hello();

// ---- function expression(function incside a function without parameters)

const hello1 = function(){
    console.log("hello@1")
}
hello1();


// ------- arrow function --------
 const hello2 = (name,age) => {console.log(`hello${name} you are ${age} year old`)};
 
    hello2("bravo", 23);



    // ------ ******------


    // setTimeout(() => console.log("hello"),3000);



    const numbers=[1,2,3,4,5,6];
    const squares=numbers.map((element)=> Math.pow(element ,2));
      
    console.log(squares);


    const cubes=numbers.map((element)=> Math.pow(element ,3));
      
    console.log(cubes);

    const evenNumbers=numbers.filter((element)=>element%2===0);
      
    console.log(evenNumbers);

    const oddNumbers=numbers.filter((element)=> element%2!==0);
      
    console.log(oddNumbers);
    const total=numbers.reduce((accumulator,element)=> accumulator+element);
      
    console.log(total);








