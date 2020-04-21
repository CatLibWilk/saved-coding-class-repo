
// Named function types example
function add(x: number, y: number): number {
    return x + y;
}

console.log('------------------------------------------------------------------------');
console.log('Add function example, named function');
console.log('-----------------------------------------------------------------------');  
console.log(add(3, 2));
console.log('\n');


// Variable function types example
const subtract = function (x: number, y: number): number {
    return x - y;
}

console.log('------------------------------------------------------------------------');
console.log('Subtract function example, anonymous function');
console.log('-----------------------------------------------------------------------');  
console.log(subtract(3, 2));
console.log('\n');


// Arrow function types example
const multiply = (x: number, y: number): number => x * y;

console.log('------------------------------------------------------------------------');
console.log('Multiply function example, uses arrow functions');
console.log('-----------------------------------------------------------------------');         
console.log(multiply(3, 2));
console.log('\n');


// Optional argument function example
const fullName = (firstName: string, lastName?: string): string => 
    lastName ? firstName + lastName : firstName;
    

console.log('------------------------------------------------------------------------');
console.log('fullName function example, uses arrow functions, optional argument');
console.log('-----------------------------------------------------------------------');         
console.log(fullName("Ed", "Brennan"));
console.log(fullName("Ed"));
console.log('\n');


// Default argument function example
const printMessage = (message = "Hello World"): string => message;
    
    

console.log('------------------------------------------------------------------------');
console.log('printMessage function example, uses arrow functions, default argument');
console.log('-----------------------------------------------------------------------');         
console.log(printMessage("Ed was Here"));
console.log(printMessage());
console.log('\n');


// Rest arguments example
const buildName = (firstName: string, ...restOfName: string[]): string => 
    firstName + " " + restOfName.join(" ");
    
    

console.log('------------------------------------------------------------------------');
console.log('buildName function example, uses rest parameters');
console.log('-----------------------------------------------------------------------');         
console.log(buildName("Ed", "was", "here", "Brennan"));
console.log('\n');        
