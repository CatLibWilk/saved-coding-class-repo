// Borrub is an object representing a video game avatar
const borrub = {
  race: "Orc",
  gender: "male",
  name: "Borrub",
  className: "Hunter",
  level: 14
};

// avatars is an array of video game avatar objects
let avatars = [
  {
    race: "Undead",
    gender: "female",
    name: "Tameli",
    className: "Rogue",
    level: 33
  },
  {
    race: "Human",
    gender: "female",
    name: "Fiana",
    className: "Mage",
    level: 10
  }
];

// 1. Update this function so it uses array spread to append the new avatar to the array
const addAvatar = function(avatar) {
  return[...avatars, avatar];
};

const greet = function(avatar) {
  // 2. Update this function to use object destructuring to access the avatar object properties
  var { race, gender, name, className, level } = avatar
  console.log(`I am ${name}, level ${level} ${gender} ${race} ${className}.`);
};
const greet2 = function( { race, gender, name, className, level } ) {
  // 2. Update this function to use object destructuring to access the avatar object properties
  console.log(`I am ${name}, level ${level} ${gender} ${race} ${className}.`);
};

// Adds borrub to the list of avatars
avatars = addAvatar(borrub);

// For each avatar, call the greet function and pass in the avatar as an argument
avatars.forEach(greet2);