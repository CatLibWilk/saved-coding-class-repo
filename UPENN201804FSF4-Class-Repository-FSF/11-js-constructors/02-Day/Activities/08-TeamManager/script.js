var inquirer = require("inquirer");
var starters = [];
var subs = [];
var score = 0;

var Player = function(name, position, offense, defense){
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
}

Player.prototype.goodGame = function(){
    var coinFlip = Math.floor(Math.random()*2) 
    console.log(coinFlip);

    if(coinFlip === 1){
        this.offense += 1;
        console.log(`New offense score for ${this.name}is ${this.offense}`);
    }else{
        this.defense += 1;
        console.log(`New defense score for ${this.name} is ${this.defense}`);
    }
}

Player.prototype.badGame = function(){
    var coinFlip = Math.floor(Math.random()*2) 
    console.log(coinFlip);

    if(coinFlip === 1){
        this.offense -= 1;
        console.log(`New offense score for ${this.name} is ${this.offense}`);
    }else{
        this.defense -= 1;
        console.log(`New defense score for ${this.name} is ${this.defense}`);
    }
    
}

Player.prototype.printStats = function(){
    console.log(`Player: ${this.name}, Position: ${this.position}, Offensive Power: ${this.offense}, Defensive Power: ${this.defense}`);
}


function playerMaker(){
    if (starters.length + subs.length<3){
        inquirer.prompt([
            {
                name: "name",
                message: "What is the player's name?"
            },
            {
                name: "position",
                message: "What is the player's position?"
            },
            {
                name: "offense",
                message: "What is the player's offense power?",
                validate: function(value){
                    if(isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10){
                        return true
                    }
                    return false
                }
            },
            {
                name: "defense",
                message: "What is the player's defense power?",
                validate: function(value){
                    if(isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10){
                        return true
                    }
                    return false
                }
            }
        ]).then(function(answers){
            var newPlayer = new Player(answers.name, answers.position, parseInt(answers.offense), parseInt(answers.defense));
            if(starters.length<2){
                starters.push(newPlayer);
                console.log(`${newPlayer.name} added to starters`);
            }else{
                subs.push(newPlayer);
                console.log(`${newPlayer.name} added to subs`);
            }
            playerMaker();
        });
    }else{
        console.log("team created");
        playGame(0);
    }
}
function playGame(round){
    if(round<5){
        round++;
        console.log(`---------------\nRound: ${round}------------------`)
        var offenseRandom = (Math.floor(Math.random() * 20) + 1);
        var defenseRandom = (Math.floor(Math.random() * 20) + 1);
        var totalOffense = 0;
        var totalDefense = 0;

        for (var i = 0; i<starters.length; i++){
            totalOffense += starters[i].offense;
            totalDefense += starters[i].defense;
        }

        console.log("total team offense is " + totalOffense);
        console.log("total team defense is " + totalDefense);
        console.log("random offense is " + offenseRandom);
        console.log("random defense is " + defenseRandom);

        if(offenseRandom<totalOffense){
            console.log("you scored a point!");
            score++;
        }
        if(defenseRandom>totalDefense){
            console.log("you lost a point");
            score--;
        }
        playGame(round);
    }else{
        console.log(`final score: ${score}`);
        if(score>0){
            console.log("good game");
            for(var k=0; k<starters.length; k++){
                starters[k].goodGame();
            }
        }
        if(score<0){
            console.log("youch, not great");
            for (var k =0; k<starters.length; k++){
                starters[k].badGame();
            }
        }
        if (score === 0) {
            console.log("It was a tie game! Not good. Not bad.");
        }
        inquirer.prompt([
            {
                name: "again",
                type: "confirm",
                message: "do you wanna go another round?"
            }
        ]).then(function(answer){
            if(answer.again === true){
                score = 0;
                playGame(0);
            }else{
                console.log("thanks for playing!");
            }
        });

    }
}
playerMaker();
