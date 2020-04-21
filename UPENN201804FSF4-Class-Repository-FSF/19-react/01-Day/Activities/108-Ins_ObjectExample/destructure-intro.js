// ----- Object Destructuring ------
var luke = { occupation: "Jedi", father: "Anakin" };
// ES5
var occupation = luke.occupation; // Jedi
var father = luke.father; // Anakin

// ES6 - Destructuring
var { occupation, father } = luke;

console.log(occupation); // Jedi
console.log(father); // Anakin

// ----- Array Destructuring ------
var racers = ["Anakin", "Gasgano", "Aldar Beedo", "Ebe E. Endocott"];
// ES5
var first = racers[0]; // Anakin
var second = racers[1]; // Gasgano
var others = racers.slice(2); // ['Aldar Beedo', 'Ebe E. Endocott']

// The ...spread operator can be used "spread" the contents of an existing array into a new one, similar to the concat method
racers = [...racers, "Sebulba"];

// ES6 - Array destructuring also using `...` rest pattern
var [first, second, ...others] = racers;
console.log(first); // Anakin
console.log(second); // Gasgano
console.log(others); // ['Aldar Beedo', 'Ebe E. Endocott']



var characters = [
    {
        "name": "jame",
        "age": 26
    },
    {
        "name": "tabe",
        "age": 27
    },
    {
        "name": "ded",
        "age": 21
    },
];
console.log(characters);
characters = [...characters, {"name": "fabe", "age": 222}];

var nwo = characters
            .filter(character => {if((character.name).startsWith("f")) {return true} })
            .forEach(pass => console.log(pass.name))
var addr = characters.forEach(character => {character.name = character.name + "r"})
    console.log(addr)