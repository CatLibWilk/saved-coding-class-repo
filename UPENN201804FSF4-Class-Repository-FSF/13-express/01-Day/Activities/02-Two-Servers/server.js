var http = require("http");

var port1 = 7000;
var port2 = 7500;

function handleRequest(request, response){
    response.end("You're great");
}

function handleRequest2(request, response){
    response.end("You're not great");
}

var server = http.createServer(handleRequest);

server.listen(port1, function(){
    console.log("listening on 7000")
});

var server2 = http.createServer(handleRequest2);

server2.listen(port2, function(){
    console.log("listening on 7500");
});