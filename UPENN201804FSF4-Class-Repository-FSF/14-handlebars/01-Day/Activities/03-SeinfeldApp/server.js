var express = require("express");
var mysql = require("mysql");
var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 8080;

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "seinfeld_db"
});

connection.connect(err => {
    if (err){
        console.error("error connection: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

app.get("/cast", ( req , yellow ) => {
    connection.query("SELECT * FROM actors", (err, res) => {
        var html = "<h1> Cast of Seinfeld </h1>";

        res.forEach(pass => {
            html += `<p>${pass.name} is ${pass.attitude}. Their coolness rating is ${pass.coolness_points}.</p>`
        })
        
        
        
        yellow.send(html);
    })
});

app.get("/coolness-chart", ( req , yellow ) => {
    connection.query("SELECT * FROM actors ORDER BY coolness_points DESC", ( err, res ) => {
       var html = "<h1> Cast of Seinfeld by Coolness </h1>";

        res.forEach(pass => {
            html += `<p>${pass.name} is ${pass.attitude}. Their coolness rating is ${pass.coolness_points}.</p>`
        })
        
        
        
        yellow.send(html);
    })

});

app.get("/attitude-chart/:att", ( req , yellow ) => {
    var input = req.params.att;
    connection.query("SELECT * FROM actors WHERE ?", {
        attitude: input
    }, ( err, res ) => {
        console.log(res.length)
        if(res.length === 0){
            console.log("run")
            var html = `<html><h1>Sorry, there are no characters listed as ${input}.</h1></html>`
        }else{
        html = `<html><h1> Seinfeld Characters that are ${input}</h1>`;
        res.forEach(pass => {
            html += `<p>${pass.name} is ${pass.attitude}. Their coolness rating is ${pass.coolness_points}.</p>`
        })
    }
        html += "</html>"
        yellow.send(html);
    })
});


app.listen(PORT, () => {
    console.log("Server listening on http://localhost"  +PORT);
})