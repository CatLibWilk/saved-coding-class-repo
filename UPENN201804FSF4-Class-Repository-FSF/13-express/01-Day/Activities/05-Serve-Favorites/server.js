var http = require("http");
var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("server listening on: http://localhost:" + PORT);
});

function handleRequest(req, res){
    var path = req.url;

    switch(path){
        case "/":
            return displayRoot(path, req, res);

        case "/food":
            return displayFood(path, req, res);

        case "/movies":
            return displayMovies(path, req, res);

        case "/frameworks":
            return displayFrames(path, req, res);


        default:
            return display404(path, req, res);
    };
};


function displayRoot(url, req, res){
    fs.readFile(__dirname + "/index.html", function(err, data) {

        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}
function displayFood(url, req, res){
    fs.readFile(__dirname + "/food.html", function(err, data) {

        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}
function displayMovies(url, req, res){
        fs.readFile(__dirname + "/movies.html", function(err, data) {
    
            // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
            // an html file.
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    }
function displayFrames(url, req, res){
        fs.readFile(__dirname + "/frameworks.html", function(err, data) {
    
            // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
            // an html file.
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    }


function display404(url, req, res){
    var myHTML = "<html>" +
    "<body><h1>404 Not Found </h1>" +
    "<p>The page you were looking for: " + url + " can not be found</p>" +
    "</body></html>";

  res.writeHead(404, { "Content-Type": "text/html" });

  res.end(myHTML);
};