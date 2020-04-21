var input = process.argv[2];

function DigitalPal(){
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;   
    this.feed = function(){
        if(this.hungry){
            console.log("That was yummy!");
            this.hungry = false;
            this.sleepy = true;
        }else{
            console.log("No thanks, I'm full");
        }
    }

    this.sleep = function(){
        if(this.sleepy){
            console.log("Zzzzzzzz");
            this.sleepy = false;
            this.bored  = true;
            this.increaseAge();
        }else{
            console.log("I'm not tired");
        }
    }

    this.play = function(){
        if(this.bored){
            console.log("Yay lets play");
            this.bored = false;
            this.hungry = true;
        }else{
            console.log("maybe later...");
        }
    }

    this.increaseAge = function (){
        this.age += 1;
        console.log(`Yay it's my birthday, I'm ${this.age}`);
    }
}

var bitch = new DigitalPal();

var dog = new DigitalPal();

dog.outside = false;
dog.bark = function(){
    console.log("Woof");
}

dog.goOutside = function(){
    if(!this.outside){
        console.log("Yay");
        this.outside = true;
    }else{
        console.log("we already are");
    }
}

dog.goInside = function(){
    if(this.outside){
        console.log("do we have to?");
        this.outside = false;
    }else{
        console.log("We already are");
    }
}

