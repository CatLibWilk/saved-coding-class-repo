import Triangle from './Triangle';
import Square from './Square';


let triangle= new Triangle(7);


console.log('--------------------------------------------------------------------------------');
console.log('Calling Triangle area method, overridden in Triangle'); 
console.log('--------------------------------------------------------------------------------');  
console.log(triangle.area());
console.log('\n');

console.log('--------------------------------------------------------------------------------');
console.log('Calling Triangle perimeter method, inherited from Shape'); 
console.log('--------------------------------------------------------------------------------');  
console.log(triangle.perimeter());
console.log('\n');

console.log('--------------------------------------------------------------------------------');
console.log('Calling Triangle getSides method, inherited from Shape'); 
console.log('--------------------------------------------------------------------------------');  
console.log(triangle.getSides());
console.log('\n');





let square = new Square(5);


console.log('--------------------------------------------------------------------------------');
console.log('Calling Square area method, overridden in Square'); 
console.log('--------------------------------------------------------------------------------');  
console.log(square.area());
console.log('\n');

console.log('--------------------------------------------------------------------------------');
console.log('Calling Square perimeter method, inherited from Shape'); 
console.log('--------------------------------------------------------------------------------');  
console.log(square.perimeter());
console.log('\n');

console.log('--------------------------------------------------------------------------------');
console.log('Calling Square getSides method, inherited from Shape'); 
console.log('--------------------------------------------------------------------------------');  
console.log(square.getSides());
console.log('\n');

