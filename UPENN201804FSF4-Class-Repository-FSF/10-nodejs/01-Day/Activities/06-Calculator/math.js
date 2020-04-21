var operand = process.argv[2];
var var1 = parseFloat(process.argv[3]);
var var2 = parseFloat(process.argv[4]);

    // if (operand === "add"){
    //     console.log(var1 + var2);   
    // }

    // if (operand === "subtract"){
    //     console.log(var1 - var2);  
    // }

    // if (operand === "multiply"){
    //     console.log(var1 * var2);  
    // }

    // if (operand === "divide"){
    //     console.log(var1 / var2);   
    // }

    // if (operand === "remainder"){
    //     console.log(var1 % var2);  
    // }

    // if (operand === "exp"){
    //     console.log(Math.pow(var1, var2));
    // }

 
    switch(operand) {
        case "add":
            console.log(var1 + var2);
            break;
        case "subtract":
            console.log(var1 - var2);
            break;
        case "multiply":
            console.log(var1 * var2);
            break;
        case "divide":
            console.log(var1 / var2);
            break;
        case "remainder":
            console.log(Math.pow(var1, var2));
            break;
        case "exp":
            console.log(Math.pow(var1, var2));
            break;
        default: 
            text = "Looking forward to the Weekend";
    }