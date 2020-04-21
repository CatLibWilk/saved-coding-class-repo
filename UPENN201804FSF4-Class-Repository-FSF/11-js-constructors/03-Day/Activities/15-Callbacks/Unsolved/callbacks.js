var fs = require("fs");

// Write a function that logs a message, then executes
// a function argument.
function myFunction(message, callback){
    console.log(message);
    callback();
}

function twoFunction(){
    console.log("second function runs");
}

// myFunction("message one", twoFunction);
// Write a function that runs a function argument if
// its other argument is truthy.

var test = 0;

function funTwo(twoFunction, test){
    if(typeof(test) === "number"){
        console.log("test checks");
        twoFunction();
    }else{
        console.log("not a number");
    }
}

// funTwo(twoFunction, test);
// Write a function that accepts a function argument and
// a value, and returns a function that returns the result
// of executing the function argument with the value.
// This isn't as hard as it sounds!

function threeFunction (newFun, value){
    newFun(value);

}

function newFun(x){
    console.log(x*5);
}

// threeFunction(newFun, 5);

// Use fs.writeFile to log a message to a file called
// log.txt. Are yo using callbacks anywhere? Where?
function write(){
    fs.appendFile("log.txt", "writing to file", function(err){
        if(err){
            console.log("errpr");
        }
    })
}
 
write();