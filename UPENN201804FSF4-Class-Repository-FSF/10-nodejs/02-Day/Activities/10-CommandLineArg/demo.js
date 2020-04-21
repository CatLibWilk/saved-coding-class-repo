var varx = parseFloat(process.argv[2]);
var vary = parseFloat(process.argv[3]);

if (varx%7===0 && vary%7===0){
    console.log("true");
}else{
    console.log("false");
}