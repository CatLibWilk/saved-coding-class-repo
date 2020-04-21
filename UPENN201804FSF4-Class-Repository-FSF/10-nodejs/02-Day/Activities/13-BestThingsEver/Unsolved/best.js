var fs = require("fs");

fs.readFile("best_things_ever.txt", "utf-8", function(err, data){
    if(err){
        console.log("error");
    }
    var dataVar = data.split(",");
    
    for (var i = 0; i<dataVar.length; i++){
        console.log(dataVar[i]);
    }
    
});

