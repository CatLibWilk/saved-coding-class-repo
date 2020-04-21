import Animal from './Animal';
import Cat from './Cat';
import Dog from './Dog';

// We can instantiate Dog and Cat as Expected...
let buddy: Dog = new Dog("Buddy");
let priscilla: Cat = new Cat("Priscilla");

// And we can call super methods on both...
console.log('--------------------------------------------------------------------------------');
console.log('Calling Buddy the Dogs feed method, inherited from Animal'); 
console.log('--------------------------------------------------------------------------------');  
buddy.feed();
console.log(buddy.isFed());
console.log('\n');


console.log('--------------------------------------------------------------------------------');
console.log('Calling Priscilla the Cats move method, inherited from Animal'); 
console.log('--------------------------------------------------------------------------------');
priscilla.move();
console.log('\n');


// And we can call their local methods on both...
console.log('--------------------------------------------------------------------------------');
console.log('Calling Buddy the Dogs howl method'); 
console.log('--------------------------------------------------------------------------------');
buddy.howl();
console.log('\n');

console.log('--------------------------------------------------------------------------------');
console.log('Calling Priscilla the Cats purr method'); 
console.log('--------------------------------------------------------------------------------');
priscilla.purr();
console.log('\n');


// We can instantiate either as an Animal as well...
let fido: Animal = new Dog("Fido");
let sylvestor: Animal = new Cat("Sylvestor");


console.log('--------------------------------------------------------------------------------');
console.log('Call Fidos isFed method, available thru the Animal class'); 
console.log('--------------------------------------------------------------------------------');
console.log(fido.isFed());
console.log('\n');

console.log('--------------------------------------------------------------------------------');
console.log('Call Sylvestors feed method, available thru the Animal class'); 
console.log('--------------------------------------------------------------------------------');
sylvestor.feed();
console.log('\n');
