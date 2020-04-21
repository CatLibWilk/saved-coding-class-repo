var inquirer = require("inquirer");

var Programmer = function(name, age, title){
    this.name = name;
    this.age = age;
    this.title = title
}

Programmer.prototype.print = function(){
    console.log(`${this.name}, ${this.age}, ${this.title}`);
}

inquirer.prompt([
    {
        name: 'name',
        message: "What is your name"
    },
    {
        name: 'age',
        message: "What is your age"
    },
    {
        name: 'title',
        message: "What is your title"
    }
]).then(function(answers){
    var user = new Programmer(answers.name, answers.age, answers.title);
    user.print();
    }
);
