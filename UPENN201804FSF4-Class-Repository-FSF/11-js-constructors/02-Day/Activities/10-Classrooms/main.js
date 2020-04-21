var Classroom = require("./classroom.js");

var firstClass = new Classroom("Mr. Donald", 222);

firstClass.addStudent("chuck", "science", 2.5);
firstClass.addStudent("prince", "music", 3.3);

console.log(firstClass.studentCount());