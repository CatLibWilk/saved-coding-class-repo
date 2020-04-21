var mysql = require("mysql");
var term = process.argv[2];

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "songs_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection (){
  connection.query(`SELECT title, artist FROM songs WHERE artist='${term}'`, function(err, res) {
    if (err) throw err;
    console.log(res);
    for (var i = 0; i< res.length; i++){
      if(i===0){
        console.log("\n");
        console.log("\n");
        console.log("---------PLAYLIST---------");
        console.log(`${res[i].title} by ${res[i].artist}`);

      }else
      console.log(`${res[i].title} by ${res[i].artist}`);
      console.log("------------------");
    }
    connection.end();
  });
}