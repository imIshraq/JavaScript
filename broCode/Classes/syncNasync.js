// synchronous = executes line by line consecutively in a sequential manner code that waits fro an operation to complete.

// asynchronous = allows multiple operations to be performed concurrently without waiting doesn't block the execution flow and allows the program to continue (I/O operations, network requests, fetching data ). Handled with:callbacks, promises, async/wait.
// synchornous code 
 console.log("task 2");
 console.log("task 3");
 console.log("task 4");

// asynchronous code
function func1(callback){
setTimeout(()=> {console.log("task 1");callback()}, 3000);

}

function func2(){
    console.log("task 2");
    console.log("task 3");
    console.log("task 4");
     
}
func1(func2);