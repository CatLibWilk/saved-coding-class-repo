var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "ice_creamDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {
  connection.query("SELECT flavor, price FROM ice_creamDB.products ORDER BY price DESC", function(err, res) {
    if (err) throw err;
    console.log(res);
    for (var i = 0; i< res.length; i++){
      console.log(`${res[i].flavor} costs $${res[i].price}`);
      console.log("------------------");
    }
    connection.end();
  });
}
