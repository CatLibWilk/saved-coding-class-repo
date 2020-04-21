var express = require("express");
var exhbrs = require("express-handlebars");

var app = express();

var PORT = process.env.PORT || 8080;

app.engine("handlebars", exhbrs({defaultLayout: "main"}));
app.set ("view engine", "handlebars");


var icecreams = [
    {name: 'vanilla', price: 10, awesomeness: 3},
    {name: 'chocolate', price: 4, awesomeness: 8},
    {name: 'banana', price: 1, awesomeness: 1},
    {name: 'greentea', price: 5, awesomeness: 7},
    {name: 'jawbreakers', price: 6, awesomeness: 2},
];

app.get("/icecream/:name", (req, res) => {
    var flavor = req.params.name;

    var chosen = icecreams.find(pass => {
        if(pass.name === flavor){
            return true;
        }
    });
    var chosIndex = icecreams.indexOf(chosen);
    res.render("index", icecreams[chosIndex]);
});

app.get("/icecreams", (req, res) => {
    res.render("all-creams", {
        creams: icecreams
    });
});

app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
})