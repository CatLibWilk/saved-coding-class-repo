var express = require("express");
var bodyParser = require("body-parser");

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "moviePlannerDB"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

app.get("/", function(req, res) {
    connection.query("SELECT * FROM movies;", function(err, data) {
      if (err) {
        return res.status(500).end();
      }
  
      res.render("index", { movies: data });
    });
  });

app.post("/movies", ( req, res ) => {
  console.log(req.body.movie);
  connection.query("INSERT INTO movies (title) VALUES (?)", [req.body.movie], (err, result) => {
    if(err) return res.status(500).end();
  
    console.log(result);
    res.json({ id: result.id });
  });
});

app.put("/movies/:id", ( req, res ) => {
  connection.query("UPDATE movies SET title = ? WHERE id = ?", [req.body.movie, req.params.id], (err, result) => {

    if(err) return res.status(404).end();
    
    res.json({id: result.id});

  });
});

app.delete("/movies/:id", ( req, res ) => {
  console.log(req.body);
  console.log(req.params.id)
  connection.query("DELETE FROM movies WHERE ?", {id: req.params.id}, ( err, result ) => {
    if(err) return res.status(404).end();
    res.json({id: result.id});
  })
});





app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});