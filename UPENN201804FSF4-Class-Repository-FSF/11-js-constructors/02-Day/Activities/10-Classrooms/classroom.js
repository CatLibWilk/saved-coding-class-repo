var Student = require("./student.js");



var Class = function(professor, room){
    this.roll = [];
    this.professor = professor;
    this.room = room;
    this.addStudent = function(name, subject, gpa){
        this.roll.push(new Student(name, subject, gpa));    
    }
    this.studentCount = function(){
        console.log(`There are ${this.roll.length} students in the class`);
    }
}

module.exports = Class;