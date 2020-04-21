var bandInfo = require("./bands.js");
console.log(bandInfo);

var random = Math.floor(Math.random()*3);
// console.log(random);
// console.log(bandInfo["rap"][1]);


for (var key in bandInfo) {
    console.log("A " + key + " band is " + bandInfo[key][random]);
  }
  
