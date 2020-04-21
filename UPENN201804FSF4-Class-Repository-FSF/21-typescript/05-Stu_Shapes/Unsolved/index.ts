import Triangle from './Triangle';
import Square from './Square';


let triangle= new Triangle(3);


console.log('--------------------------------------------------------------------------------');
console.log('Calling Triangle area method'); 
console.log('--------------------------------------------------------------------------------');  
console.log(triangle.area());
console.log('\n');

console.log('--------------------------------------------------------------------------------');
console.log('Calling Triangle perimeter method'); 
console.log('--------------------------------------------------------------------------------');  
console.log(triangle.perimeter());
console.log('\n');

console.log('--------------------------------------------------------------------------------');
console.log('Calling Triangle getSides method'); 
console.log('--------------------------------------------------------------------------------');  
console.log(triangle.getSides());
console.log('\n');




// console.log('--------------------------------------------------------------------------------');
// console.log('Calling Triangle sides private property'); 
// console.log('--------------------------------------------------------------------------------');  
// console.log(triangle.sides);
// console.log('\n');

// console.log('--------------------------------------------------------------------------------');
// console.log('Calling Triangle sideLength private property'); 
// console.log('--------------------------------------------------------------------------------');  
// console.log(triangle.sideLength);
// console.log('\n');




let square = new Square(5);


console.log('--------------------------------------------------------------------------------');
console.log('Calling Square area method'); 
console.log('--------------------------------------------------------------------------------');  
console.log(square.area());
console.log('\n');

console.log('--------------------------------------------------------------------------------');
console.log('Calling Square perimeter method'); 
console.log('--------------------------------------------------------------------------------');  
console.log(square.perimeter());
console.log('\n');

console.log('--------------------------------------------------------------------------------');
console.log('Calling Square getSides method'); 
console.log('--------------------------------------------------------------------------------');  
console.log(square.getSides());
console.log('\n');

