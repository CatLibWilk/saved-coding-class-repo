var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "root",
    database: "top_songsDB"
  });

  connection.connect(function(err) {
    if (err) throw err;
    start();
  });

  function start(){
    inquirer.prompt([
        {
            name: "searchChoice",
            type: "list",
            message: "What kind of search do you want to do?",
            choices: [
                "Find songs by artist", 
                "Find all artists who appear more than once", 
                "Find data wthin a specific range", 
                "Search for a specific song", 
                "Exit the app"
            ]
        }
    ]).then(function(response){
        switch(response.searchChoice){
            case "Find songs by artist":
                artistSearch();
            break;
            case "Find all artists who appear more than once":
                multiSearch();
            break;
            case "Find data wthin a specific range":
                rangeSearch();
            break;
            case "Search for a specific song":
                songSearch();
            break;
            case "Exit the app":
                connection.end();
            break;
            default: start();
        }
    });
  };



function artistSearch(){
    inquirer.prompt([
        {
            name: "artist",
            type: "input",
            message: "What artist would you like to search for?"
        }
    ]).then(function(response){
        connection.query("SELECT * FROM top5000 WHERE ?",
    {
        artist: response.artist
    }, function(err, res){
        if (err) throw err;
        for (var i=0; i<res.length; i++){
        console.log(`Song: ${res[i].song} - Year: ${res[i].year}`);
        }
    })
        start();
    }); 
};
function multiSearch(){
    connection.query("SELECT artist, COUNT (*) cnt FROM top5000 GROUP BY artist having cnt >1 ORDER BY cnt DESC", function(err, res){
        if (err) throw err;
        for(var i = 0; i<res.length; i++){
            console.log(`${res[i].artist} appears ${res[i].cnt} time(s)`);
        };
        start();
    });
    
};
function rangeSearch(){
    inquirer
    .prompt([
      {
        name: "start",
        type: "input",
        message: "Enter starting position: ",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      },
      {
        name: "end",
        type: "input",
        message: "Enter ending position: ",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      }
    ])
    .then(function(answer) {

      // When we get the answer back, we can query the database for the result

      connection.query(`SELECT * FROM top5000 WHERE position BETWEEN ${answer.start} AND ${answer.end}`, function(err, res){
          if (err) throw err;
          for(var i = 0; i<res.length; i++){
              console.log(`
              ${i + 1}-- Artist: ${res[i].artist} - Song: ${res[i].song} - Year: ${res[i].year}`);
          }
          start();
      });

    });

    
};
function songSearch(){
    inquirer.prompt([
        {
            name: "song",
            type: "input",
            message: "What song do you want to find?"
        }
    ]).then(function(response){
        connection.query(`SELECT * FROM top5000 WHERE ?`,
        {
            song: response.song
        },
        function(err, res){
            if (err) throw err;
            if(res.length === 0){
                console.log(`
            Sorry, ${response.song} is not in the database`);
            }else{
                console.log(`
            Artist: ${res[0].artist} - Song: ${res[0].song} - Year: ${res[0].year} - Overall Popularity: ${res[0].raw_total}`);
            }

            start();
        }
    )
    });
    
};