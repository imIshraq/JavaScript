//  Error = An object that is created to represent that occurs occur often with user input or establishing a connection

// TRY { } = Encloses code that might potentially cause an error 
// catch { } = Catch and handle any thrown errors from try { }
// finallyy { } = (optional) Always executes. Used  mostly for clean up ex: close files, close connections, release resources 

try{
    console.log(x);
    // NETWORK ERRORS 
    // PROMISE REJECTION
    // SECURITY ERRORS
}

catch(error){
    console.error(error);
}

finally{
    // CLOSE FILES
    // CLOSE CONNECTIONS 
    // RELEASE RESOURCES 
    console.log("This always executes");
}

console.log("You have reached the end!");

try{
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));
    if (divisor == 0){
        throw new Error("You can't divide by zero ");
    }
    if (isNaN (dividend) || isNaN(divisor)){
        throw new Error ("Values must be a number");
    }

    const result = dividend / divisor;
    console.log(result);
}
catch(error){
    console.log(error);
}

console.log("You have still reached the end!");