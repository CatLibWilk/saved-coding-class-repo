// alert("connect");

$(document).ready(function() {


var btnEqual = $("#button-equal");
var btnClear = $("#button-clear");

var firstNum = $("#first-number");
var val1 = "";
var operSpace = $("#operator");
var secNum = $("#second-number");
var val2 = "";
var isFirst = true;
var canClick = true;
var numericVal1;
var numericVal2;
var operator;

$(".number").on("click", function(e){
    var num = $(this).val();
    if (isFirst === true){
    val1 += num;
    firstNum.append(num);
    }else{
        val2 += num;
        secNum.append(num);
    }

});

$(".operator").on("click", function(){
    var oper = $(this).val();
    if (oper === "plus"){
        symbol = "+";
    }
    if (oper === "minus"){
        symbol = "-";
    }
    if (oper === "times"){
        symbol = "*";
    }
    if (oper === "divide"){
        symbol = "/";
    }
    if (oper === "power"){
        symbol = "pow";
    }
    operSpace.append(symbol);
    numericVal1 = Number(val1);
    isFirst = false;

});

btnEqual.on("click", function(){
    if (canClick === true){
    numericVal2 = Number(val2);
    if (symbol === "pow"){
        mathsResult = numericVal1 ** numericVal2;
        }
        if (symbol === "/"){
            mathsResult = numericVal1 / numericVal2;
            }
            if (symbol === "*"){
                mathsResult = numericVal1 * numericVal2;
                }
                if (symbol === "-"){
                    mathsResult = numericVal1 - numericVal2;
                    }
                    if (symbol === "+"){
                        mathsResult = numericVal1 + numericVal2;
                        }
                        
    $("#result").append(mathsResult);
    canClick = false;
    $("body").attr("style", "background-image: url(royalelounge.jpg)")
    $("#title").html("What a Number!");
    $("#sub-title").html("such fun as was never had before");
    $(".jumbotron").attr("class", "jumbotron bg-warning");
}
});

btnClear.on("click", function(){
    val1 = "";
    val2 = "";
    numericVal1 = 0;
    numericVal2 = 0;
    isFirst = true;
    canClick = true;
    $("#result").empty();
    firstNum.empty();
    secNum.empty();
    operSpace.empty();
    $("body").attr("style", "");
    $("#title").html("jQuery Calculator");
    $("#sub-title").html("Perform basic mathematic operations using the power of jQuery!");
    $(".jumbotron").attr("class", "jumbotron");
});

    
    
 });