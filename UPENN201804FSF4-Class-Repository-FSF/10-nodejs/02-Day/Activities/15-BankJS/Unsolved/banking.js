var fs = require("fs");
var type = process.argv[2];
var amt = parseFloat(process.argv[3]);

switch(type) {
    case "total":
        fs.readFile("bank.txt", "utf-8", function(error, data){
            if(error){
                console.log("error");
            }
            var dataReturn = data.split(",");
            var total = 0;
            for(var i = 0; i<dataReturn.length; i++){
                current = parseFloat(dataReturn[i]);
                total = total+current;
            }
            console.log("Account balance is ", total);
        });
        
        break;
    case "deposit":
        fs.appendFile("bank.txt", ", " + amt, function(err) {
            if (err) {
            console.log(err);
            }
        });
        totalPrint();
      
        break; 

    case "withdraw":
        fs.appendFile("bank.txt", ", -" + amt, function(err) {
            if (err) {
            console.log(err);
            }
        });
        totalPrint();
        break;

    case "lotto":
        var rando = Math.floor(Math.random() * 10);
        console.log(rando);
        if(amt===rando){
            fs.appendFile("bank.txt", ", " + 50000, function(err) {
                if (err) {
                console.log(err);
                }
            });
        }else{
            fs.appendFile("bank.txt", ", -" + "2", function(err) {
                if (err) {
                console.log(err);
                }
            });
            totalPrint();
        }
        break;
    
    default:
        console.log("please make a transaction");
}


function totalPrint(){
    fs.readFile("bank.txt", "utf-8", function(error, data){
        if(error){
            console.log("error");
        }
        var dataReturn = data.split(",");
        var total = 0;
        for(var i = 0; i<dataReturn.length; i++){
            current = parseFloat(dataReturn[i]);
            total = total+current;
        }
        console.log("Account balance is ", total);
    });
}