
var dogs = {
    raining: true,
    noise: "woof",
    makeNoise: function(){
        if(this.raining===true){
        console.log(this.noise);
         }
    }
};

var cats = {
    raining: false,
    noise: "meow",
    makeNoise: function(){
        if(this.raining===true){
            console.log(this.noise);
        }
        
    }
};

dogs.makeNoise();
cats.makeNoise();