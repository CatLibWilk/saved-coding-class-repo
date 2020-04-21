function Character (name, profession, gender, age, strength, hitPoints){
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hitPoints = hitPoints;
    this.print = function(){
        console.log(`name: ${this.name}, profession: ${this.profession}, gender: ${this.gender}, age: ${this.age} HP: ${this.hitPoints}`);
    }
    this.attack = function(opponent){
        if(this.isAlive() && opponent.isAlive()){
        opponent.hitPoints -= this.strength;
        console.log(`${opponent.name} 's HP now ${opponent.hitPoints}`);
    }else{console.log("one of the players is dead");

    }
    }
    this.isAlive = function(){
        if (this.hitPoints > 0){
            return true
        }else{
            return false
        }
    }
}

var dicky = new Character("Dicky", "Docent", "fluid", 33, 20, 200);
var chicky = new Character("Chicky", "Chicken", "fluid", 33, 30, 200);


chicky.print();
dicky.print();

dicky.attack(chicky);
chicky.attack(dicky);
dicky.attack(chicky);
chicky.attack(dicky);
dicky.attack(chicky);
chicky.attack(dicky);
dicky.attack(chicky);
chicky.attack(dicky);
dicky.attack(chicky);
chicky.attack(dicky);
dicky.attack(chicky);
chicky.attack(dicky);
dicky.attack(chicky);
chicky.attack(dicky);
dicky.attack(chicky);
chicky.attack(dicky);