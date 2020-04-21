
var stuff = [10,34,56,67,93,120,137,168,259,280,311,342,413,514];


 var random_value = stuff[ Math.floor( Math.random() * 14 ) ];

 for (var i = 0; i<=stuff.length; i++){
     if(stuff[i] === random_value){
             console.log(`${stuff[i]}, index ${i}`)
     }
 }


var tar = stuff.find(num => {if(num === random_value){return true}})
console.log(`${tar}, ${stuff.indexOf(tar)}`)
// ### 4. Students Do: Simple For Loop Search (10 min)
// ​
// * **Instructions:**
// ​
//  ```javascript
//  var stuff = [10,34,56,67,93,120,137,168,259,280,311,342,413,514];
// ​
//  var random_value = stuff[ Math.floor( Math.random() * 14 ) ];
//  ```
// ​
//  * Write a `for` loop that looks at each index of the array to see if it matches the random value
// ​
//  * If it does match the random value display an alert box with the index of the array and the value