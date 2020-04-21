
// Arrays remain dynamic lists of values where you can push, pop, and find index positions
let list1: number[] = [1, 2, 3];
list1.push(4);
console.log('------------------------------------------------------------------------');
console.log('list1 is an array of numbers...')
console.log('------------------------------------------------------------------------');
console.log(list1);
console.log('\n');

let list2: Array<string> = ["Moe", "Larry", "Curly", "Shemp"];
list2.pop();
console.log('------------------------------------------------------------------------');
console.log('list2 is an array of strings...')
console.log('------------------------------------------------------------------------');
console.log(list2);
console.log('\n');


let list3: [string, string, number] = ['Julius', 'Caeser', 2010];

console.log('------------------------------------------------------------------------');
console.log('list3 is a tuple of known values of specified type...')
console.log('-----------------------------------------------------------------------');
console.log(list3[1]);
console.log(list3[2]);
console.log('\n');


console.log('------------------------------------------------------------------------');
console.log('Any array can be looped over thru a for loop (list1)')
console.log('-----------------------------------------------------------------------');
for(let i=0; i < list1.length; i++) {
    console.log(list1[i])
}
console.log('\n');


console.log('------------------------------------------------------------------------');
console.log('Any array can be looped over using a array methods like forEach (list2)')
console.log('-----------------------------------------------------------------------');        
list2.forEach(element => console.log(element));
console.log('\n');


    

enum Color {Red, Green, Blue};
let c: Color = Color.Green;

console.log('------------------------------------------------------------------------');
console.log('Enums allow for naming a set of numbers for friendly reference')
console.log('-----------------------------------------------------------------------');    
console.log(c)
console.log(Color[0])
console.log('\n');
