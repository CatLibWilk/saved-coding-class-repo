var Account = require("./function.js");

var acc1 = new Account("Andy", 5);
var acc2 = new Account("Dandy", 10);

console.log(acc2);
acc1.amount = 5000;
acc1.print(acc2);