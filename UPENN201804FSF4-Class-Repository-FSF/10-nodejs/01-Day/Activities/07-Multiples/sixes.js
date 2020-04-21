var input = parseFloat(process.argv[2]);
var runNum = 0;

for(var i=1; i<=input; i++){
    if(i % 6 === 0){
        runNum = runNum+i;
       
    }

    if(i===input){
        result();
    }
   
  
}

function result(){
    console.log(runNum);
}

