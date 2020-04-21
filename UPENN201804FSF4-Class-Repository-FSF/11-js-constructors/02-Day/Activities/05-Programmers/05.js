var Programmer = function(name, title, age, language){
    this.name = name,
    this.title = title,
    this.age = age,
    this.language = language
}

Programmer.prototype.print = function(){
    console.log(`Name: ${this.name}, Title: ${this.title}, Age: ${this.age}, Favorite language: ${this.language}`);
}

var andy = new Programmer('andy', 'cataloguer', 28, 'javascript');

andy.print();

console.log(andy.age);